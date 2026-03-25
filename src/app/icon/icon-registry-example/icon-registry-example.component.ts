import { Component, inject, OnInit } from '@angular/core';
import { ItIconRegistryService } from 'design-angular-kit';

@Component({
  selector: 'it-icon-registry-example',
  templateUrl: './icon-registry-example.component.html',
  standalone: false,
})
export class IconRegistryExampleComponent implements OnInit {
  private readonly iconRegistry = inject(ItIconRegistryService);

  ngOnInit(): void {
    // Register a single inline SVG icon
    this.iconRegistry.registerIcon(
      'custom-heart',
      '<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>'
    );

    // Register multiple icons at once
    this.iconRegistry.registerIcons({
      'custom-star': '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',
      'custom-check': '<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>',
    });

    // Register from an external sprite file
    this.iconRegistry.registerIconFromSprite('external-icon', '/assets/custom-sprites.svg', 'my-symbol');
  }
}
