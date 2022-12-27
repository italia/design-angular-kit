import { ComponentFixture, TestBed, fakeAsync, tick, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Component, QueryList, ViewChildren, OnInit, ViewChild } from '@angular/core';

import { ItTabGroupComponent } from './tab-group.component';
import { ItTabComponent } from './tab.component';
import { Observable } from 'rxjs';


@Component({
  template: `
    <it-tab-group class="tab-group"
        [(selectedIndex)]="selectedIndex"
        (selectedTabChange)="handleSelection($event)">
      <it-tab label="Tab One">
        Tab one content
      </it-tab>
      <it-tab label="Tab Two">
        <span>Tab </span><span>two</span><span>content</span>
      </it-tab>
      <it-tab label="Tab Three">
        Tab three content
      </it-tab>
    </it-tab-group>
  `
})
class SimpleTabsComponent {
  @ViewChildren(ItTabComponent) tabs: QueryList<ItTabComponent>;
  selectedIndex = 1;
  focusEvent: any;
  selectEvent: any;
  handleSelection(event: any) {
    this.selectEvent = event;
  }
}

@Component({
  template: `
  <it-tab-group>
    <it-tab [aria-label]="ariaLabel" [aria-labelledby]="ariaLabelledby"></it-tab>
  </it-tab-group>
  `
})
class TabGroupWithAriaInputsComponent {
  ariaLabel: string;
  ariaLabelledby: string;
}

@Component({
  template: `
    <it-tab-group>
      <it-tab label="Tab One">
        Tab one content
      </it-tab>
      <it-tab disabled label="Tab Two">
        Tab two content
      </it-tab>
      <it-tab [disabled]="isDisabled" label="Tab Three">
        Tab three content
      </it-tab>
    </it-tab-group>
  `,
})
class DisabledTabsComponent {
  @ViewChildren(ItTabComponent) tabs: QueryList<ItTabComponent>;
  isDisabled = false;
}

@Component({
  template: `
    <it-tab-group class="tab-group"
        [(selectedIndex)]="selectedIndex"
        (selectedTabChange)="handleSelection($event)">
      <it-tab *ngFor="let tab of tabs" [label]="tab.label">
        {{tab.content}}
      </it-tab>
    </it-tab-group>
  `
})
class DynamicTabsComponent {
  tabs = [
    {label: 'Label 1', content: 'Content 1'},
    {label: 'Label 2', content: 'Content 2'},
    {label: 'Label 3', content: 'Content 3'},
  ];
  selectedIndex = 1;
  selectEvent: any;
  handleSelection(event: any) {
    this.selectEvent = event;
  }
}

@Component({
  template: `
    <it-tab-group class="tab-group">
      <it-tab *ngFor="let tab of tabs | async" [label]="tab.label">
        {{ tab.content }}
      </it-tab>
   </it-tab-group>
  `
})
class AsyncTabsComponent implements OnInit {
  private _tabs = [
    { label: 'one', content: 'one' },
    { label: 'two', content: 'two' }
  ];

  tabs: Observable<any>;

  ngOnInit() {
    this.tabs = Observable.create((observer: any) => {
      setTimeout(() => observer.next(this._tabs));
    });
  }
}

@Component({
  template: `
  <it-tab-group>
    <it-tab label="Junk food"> Pizza, fries </it-tab>
    <it-tab label="Vegetables"> Broccoli, spinach </it-tab>
    <it-tab [label]="otherLabel"> {{otherContent}} </it-tab>
    <it-tab label="Legumes"> <p #legumes>Peanuts</p> </it-tab>
  </it-tab-group>
  `
})
class TabGroupWithSimpleApiComponent {
  otherLabel = 'Fruit';
  otherContent = 'Apples, grapes';
  @ViewChild('legumes', /* TODO: add static flag */ {}) legumes: any;
}

describe('TabGroupComponent', () => {
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        SimpleTabsComponent,
        TabGroupWithAriaInputsComponent,
        DisabledTabsComponent,
        DynamicTabsComponent,
        AsyncTabsComponent,
        // BindedTabsTestApp,
        TabGroupWithSimpleApiComponent,
        ItTabGroupComponent,
        ItTabComponent
      ],
    });

    TestBed.compileComponents();
  }));

  describe('comportamenti di base', () => {
    let fixture: ComponentFixture<SimpleTabsComponent>;
    let element: HTMLElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(SimpleTabsComponent);
      element = fixture.nativeElement;
    });

    it('dovrebbe selezionare di la seconda tab all\'inizio', () => {
      checkSelectedIndex(1, fixture);
    });

    it('dovrebbe caricare correttamente il contenuto dopo la prima change detection', () => {
      fixture.detectChanges();
      expect(element.querySelectorAll('.tab-pane')[1].querySelectorAll('span').length).toBe(3);
    });

    it('dovrebbe cambiare l\'indice selezionato al click', () => {
      const component = fixture.debugElement.componentInstance;
      component.selectedIndex = 0;
      checkSelectedIndex(0, fixture);

      // seleziona il secondo tab
      let tabLabel = fixture.debugElement.queryAll(By.css('.nav-link'))[1];
      tabLabel.nativeElement.click();
      checkSelectedIndex(1, fixture);

      // seleziona il terzo tab
      tabLabel = fixture.debugElement.queryAll(By.css('.nav-link'))[2];
      tabLabel.nativeElement.click();
      checkSelectedIndex(2, fixture);
    });

    it('dovrebbe supportare il binding bidirezionale per selectedIndex', fakeAsync(() => {
      const component = fixture.componentInstance;
      component.selectedIndex = 0;

      fixture.detectChanges();

      const tabLabel = fixture.debugElement.queryAll(By.css('.nav-link'))[1];
      tabLabel.nativeElement.click();
      fixture.detectChanges();
      tick();

      expect(component.selectedIndex).toBe(1);
    }));

    it('dovrebbe selezionare la giusta tab anche se il cambiamento è molto veloce', async(() => {
      const component = fixture.componentInstance;
      component.selectedIndex = 0;
      fixture.detectChanges();

      setTimeout(() => {
        component.selectedIndex = 1;
        fixture.detectChanges();

        setTimeout(() => {
          component.selectedIndex = 0;
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(component.selectedIndex).toBe(0);
          });
        }, 1);
      }, 1);
    }));

    it('dovrebbe cambiare il tab basandosi sul selectedIndex', fakeAsync(() => {
      const component = fixture.componentInstance;
      const tabComponent = fixture.debugElement.query(By.css('it-tab-group')).componentInstance;

      spyOn(component, 'handleSelection').and.callThrough();

      checkSelectedIndex(1, fixture);

      tabComponent.selectedIndex = 2;

      checkSelectedIndex(2, fixture);
      tick();

      expect(component.handleSelection).toHaveBeenCalledTimes(1);
      expect(component.selectEvent.index).toBe(2);
    }));

    it('dovrebbe aggiornare la posizione del tab quando l\'indice selezionato cambia', () => {
      fixture.detectChanges();
      const component: ItTabGroupComponent =
          fixture.debugElement.query(By.css('it-tab-group')).componentInstance;
      const tabs: ItTabComponent[] = component._tabs.toArray();

      expect(tabs[0].position).toBeLessThan(0);
      expect(tabs[1].position).toBe(0);
      expect(tabs[2].position).toBeGreaterThan(0);

      // spostati sulla terza tab
      component.selectedIndex = 2;
      fixture.detectChanges();
      expect(tabs[0].position).toBeLessThan(0);
      expect(tabs[1].position).toBeLessThan(0);
      expect(tabs[2].position).toBe(0);

      // spostati sulla terza tab
      component.selectedIndex = 0;
      fixture.detectChanges();
      expect(tabs[0].position).toBe(0);
      expect(tabs[1].position).toBeGreaterThan(0);
      expect(tabs[2].position).toBeGreaterThan(0);
    });

    it('dovrebbe bloccare l\'indice selezionato al numero di tab', () => {
      fixture.detectChanges();
      const component: ItTabGroupComponent =
          fixture.debugElement.query(By.css('it-tab-group')).componentInstance;

      // Imposto l'indice ad un valore negativo, mi aspetto il primo tab selezionato
      fixture.componentInstance.selectedIndex = -1;
      fixture.detectChanges();
      expect(component.selectedIndex).toBe(0);

      // Imposto l'indice ad un valore superiore al numero di tab, mi aspetto l'ultimo tab selezionato
      fixture.componentInstance.selectedIndex = 3;
      fixture.detectChanges();
      expect(component.selectedIndex).toBe(2);
    });

    it('non dovrebbe crashare se l\'indice selezionato assume il valore di NaN', () => {
      const component = fixture.debugElement.componentInstance;

      expect(() => {
        component.selectedIndex = NaN;
        fixture.detectChanges();
      }).not.toThrow();
    });

    it('dovrebbe impostare la proprietà isActive correttamente su ognuno dei tab', () => {
      fixture.detectChanges();

      const tabs = fixture.componentInstance.tabs.toArray();

      expect(tabs[0].isActive).toBe(false);
      expect(tabs[1].isActive).toBe(true);
      expect(tabs[2].isActive).toBe(false);

      fixture.componentInstance.selectedIndex = 2;
      fixture.detectChanges();

      expect(tabs[0].isActive).toBe(false);
      expect(tabs[1].isActive).toBe(false);
      expect(tabs[2].isActive).toBe(true);
    });
  });

  describe('aria label', () => {
    let fixture: ComponentFixture<TabGroupWithAriaInputsComponent>;
    let tab: HTMLElement;

    beforeEach(fakeAsync(() => {
      fixture = TestBed.createComponent(TabGroupWithAriaInputsComponent);
      fixture.detectChanges();
      tick();
      tab = fixture.nativeElement.querySelector('.nav-link');
    }));

    it('non dovrebbe impostare gli attributi aria-label o aria-labelledby se non sono passati', () => {
      expect(tab.hasAttribute('aria-label')).toBe(false);
      expect(tab.hasAttribute('aria-labelledby')).toBe(false);
    });

    it('dovrebbe impostare l\'attributo aria-label', () => {
      fixture.componentInstance.ariaLabel = 'Fruit';
      fixture.detectChanges();

      expect(tab.getAttribute('aria-label')).toBe('Fruit');
    });

    it('dovrebbe impostare l\'attributo aria-labelledby', () => {
      fixture.componentInstance.ariaLabelledby = 'fruit-label';
      fixture.detectChanges();

      expect(tab.getAttribute('aria-labelledby')).toBe('fruit-label');
    });

    it('non dovrebbe impostare entrambi aria-label e aria-labelledby', () => {
      fixture.componentInstance.ariaLabel = 'Fruit';
      fixture.componentInstance.ariaLabelledby = 'fruit-label';
      fixture.detectChanges();

      expect(tab.getAttribute('aria-label')).toBe('Fruit');
      expect(tab.hasAttribute('aria-labelledby')).toBe(false);
    });
  });

  describe('tab disabilitati', () => {
    let fixture: ComponentFixture<DisabledTabsComponent>;
    beforeEach(() => {
      fixture = TestBed.createComponent(DisabledTabsComponent);
    });

    it('dovrebbe avere un tab disabilitato', () => {
      fixture.detectChanges();
      const labels = fixture.debugElement.queryAll(By.css('.disabled'));
      expect(labels.length).toBe(1);
    });

    it('dovrebbe disabilitare la tab', () => {
      fixture.detectChanges();

      const tabs = fixture.componentInstance.tabs.toArray();
      let labels = fixture.debugElement.queryAll(By.css('.disabled'));
      expect(tabs[2].disabled).toBe(false);
      expect(labels.length).toBe(1);

      fixture.componentInstance.isDisabled = true;
      fixture.detectChanges();

      expect(tabs[2].disabled).toBe(true);
      labels = fixture.debugElement.queryAll(By.css('.disabled'));
      expect(labels.length).toBe(2);
    });
  });

  describe('tab bindate dinamicamente', () => {
    let fixture: ComponentFixture<DynamicTabsComponent>;

    beforeEach(fakeAsync(() => {
      fixture = TestBed.createComponent(DynamicTabsComponent);
      fixture.detectChanges();
      tick();
      fixture.detectChanges();
    }));

    it('dovrebbe aggiornare l\'indice selezionato se l\'ultima tab viene rimossa mentre è selezionata', fakeAsync(() => {
      const component: ItTabGroupComponent =
          fixture.debugElement.query(By.css('it-tab-group')).componentInstance;

      const numberOfTabs = component._tabs.length;
      fixture.componentInstance.selectedIndex = numberOfTabs - 1;
      fixture.detectChanges();
      tick();

      // Rimuovi l'ultimo tab mentre è selezionato, mi aspetto che sia selezionato quello immediatamente precedente
      fixture.componentInstance.tabs.pop();
      fixture.detectChanges();
      tick();

      expect(component.selectedIndex).toBe(numberOfTabs - 2);
    }));

    it('dovrebbe mantenere il tab selezionato se un uovo tab viene aggiunto', () => {
      fixture.detectChanges();
      const component: ItTabGroupComponent =
          fixture.debugElement.query(By.css('it-tab-group')).componentInstance;

      fixture.componentInstance.selectedIndex = 1;
      fixture.detectChanges();

      // aggiungi un nuovo tab all'inizio.
      fixture.componentInstance.tabs.unshift({label: 'Nuovo tab', content: 'all\'inizio'});
      fixture.detectChanges();

      expect(component.selectedIndex).toBe(2);
      expect(component._tabs.toArray()[2].isActive).toBe(true);
    });

    it('dovrebbe mantenere il tab selezionato se un tab viene rimosso', () => {
      // Seleziona il secondo tab.
      fixture.componentInstance.selectedIndex = 1;
      fixture.detectChanges();

      const component: ItTabGroupComponent =
          fixture.debugElement.query(By.css('it-tab-group')).componentInstance;

      // Rimuovi il primo tab che si trova a destra di quello selezionato.
      fixture.componentInstance.tabs.splice(0, 1);
      fixture.detectChanges();

      // Dal momento che il primo tab è stato rimosso e il secondo era stato precedentemente selezionato,
      // il tab selezionato si sarà spostato di una posizione a destra, essendo ora il primo tab.
      expect(component.selectedIndex).toBe(0);
      expect(component._tabs.toArray()[0].isActive).toBe(true);
    });

    it('dovrebbe poter selezionare un nuovo tab dopo la sua creazione', () => {
      fixture.detectChanges();
      const component: ItTabGroupComponent =
        fixture.debugElement.query(By.css('it-tab-group')).componentInstance;

      fixture.componentInstance.tabs.push({label: 'Ultimo tab', content: 'alla fine'});
      fixture.componentInstance.selectedIndex = 3;

      fixture.detectChanges();

      expect(component.selectedIndex).toBe(3);
      expect(component._tabs.toArray()[3].isActive).toBe(true);
    });

    it('non dovrebbe emettere l\'evento `selectedTabChange` quando il numero di tab cambia', fakeAsync(() => {
      fixture.detectChanges();
      fixture.componentInstance.selectedIndex = 1;
      fixture.detectChanges();

      // Aggiungi un nuovo tabb all'inizio.
      spyOn(fixture.componentInstance, 'handleSelection');
      fixture.componentInstance.tabs.unshift({label: 'Nuovo tab', content: 'all\'inizio'});
      fixture.detectChanges();
      tick();
      fixture.detectChanges();

      expect(fixture.componentInstance.handleSelection).not.toHaveBeenCalled();
    }));
  });

  describe('async tabs', () => {
    let fixture: ComponentFixture<AsyncTabsComponent>;

    it('dovrebbe mostrare i tab quando questi sono disponibili', fakeAsync(() => {
      fixture = TestBed.createComponent(AsyncTabsComponent);

      expect(fixture.debugElement.queryAll(By.css('.nav-link')).length).toBe(0);

      fixture.detectChanges();
      tick();
      fixture.detectChanges();
      tick();

      expect(fixture.debugElement.queryAll(By.css('.nav-link')).length).toBe(2);
    }));
  });

  describe('Tab API', () => {
    let fixture: ComponentFixture<TabGroupWithSimpleApiComponent>;
    let tabGroup: ItTabGroupComponent;

    beforeEach(fakeAsync(() => {
      fixture = TestBed.createComponent(TabGroupWithSimpleApiComponent);
      fixture.detectChanges();
      tick();

      tabGroup =
          fixture.debugElement.query(By.directive(ItTabGroupComponent)).componentInstance as ItTabGroupComponent;
    }));

    it('i tab dovrebbero avere i giusti contenuti', fakeAsync(() => {
      expect(getSelectedLabel(fixture).textContent).toMatch('Junk food');
      expect(getSelectedContent(fixture).textContent).toMatch('Pizza, fries');

      tabGroup.selectedIndex = 2;
      fixture.detectChanges();
      tick();

      expect(getSelectedLabel(fixture).textContent).toMatch('Fruit');
      expect(getSelectedContent(fixture).textContent).toMatch('Apples, grapes');

      fixture.componentInstance.otherLabel = 'Chips';
      fixture.componentInstance.otherContent = 'Salt, vinegar';
      fixture.detectChanges();

      expect(getSelectedLabel(fixture).textContent).toMatch('Chips');
      expect(getSelectedContent(fixture).textContent).toMatch('Salt, vinegar');
    }));

    it('dovrebbe supportare @ViewChild nel contenuto dei tab', () => {
      expect(fixture.componentInstance.legumes).toBeTruthy();
    });
  });

  /**
   * controlla che `selectedIndex` è stato aggiornato; controlla che il label e il corpo hanno
   * le rispettive classi `active`
   */
  function checkSelectedIndex(expectedIndex: number, fixture: ComponentFixture<any>) {
    fixture.detectChanges();

    const tabComponent: ItTabGroupComponent = fixture.debugElement
        .query(By.css('it-tab-group')).componentInstance;

    expect(tabComponent.selectedIndex).toBe(expectedIndex);

    const tabLabelElement = fixture.debugElement
        .query(By.css(`.nav-item:nth-of-type(${expectedIndex + 1}) .nav-link`)).nativeElement;
    expect(tabLabelElement.classList.contains('active')).toBe(true);

    const tabContentElement = fixture.debugElement
        .query(By.css(`.tab-pane:nth-of-type(${expectedIndex + 1})`)).nativeElement;
    expect(tabContentElement.classList.contains('active')).toBe(true);
  }

  function getSelectedLabel(fixture: ComponentFixture<any>): HTMLElement {
    return fixture.nativeElement.querySelector('.nav-link.active');
  }

  function getSelectedContent(fixture: ComponentFixture<any>): HTMLElement {
    return fixture.nativeElement.querySelector('.tab-pane.active');
  }

});
