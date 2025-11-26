import{a as W,b as S,c as J,d as G}from"./chunk-CQV3UQHT.js";import{Aa as y,ca as V,la as O,ma as q,za as Q}from"./chunk-V2DYZO43.js";import"./chunk-MPFUNZLY.js";import{h as _}from"./chunk-DVW5EFKD.js";import{F as L,G as F,m as R}from"./chunk-I647ZKKI.js";import{A as I,E as H,H as x,Hb as f,Ib as a,Jb as r,Kb as c,O as D,Ob as $,Q as w,S as v,Sa as P,Sb as u,Wa as d,Xb as B,Y as T,Yb as N,Zb as z,aa as C,cc as s,fb as m,ga as A,gb as E,ha as k,k as U,l as b,q as h,w as M,x as j}from"./chunk-H5YVEJFN.js";import"./chunk-TMEVGU2Q.js";var ne=["uploadDragDropComponent"],K=(()=>{let i=class i{onDragUploadStart(){j(1e3).pipe(H(100),h(t=>(t+1)*10)).subscribe(t=>{this.uploadDragDropComponent.progress(t),t>=100&&setTimeout(()=>{this.uploadDragDropComponent.reset()},2e3)})}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=m({type:i,selectors:[["it-upload-drag-drop-example"]],viewQuery:function(e,o){if(e&1&&B(ne,5),e&2){let l;N(l=z())&&(o.uploadDragDropComponent=l.first)}},standalone:!1,decls:7,vars:0,consts:[["uploadDragDropComponent",""],[1,"bd-example"],[1,"row","my-2"],[1,"col"],[3,"fileStartUpload"]],template:function(e,o){if(e&1){let l=$();a(0,"h3"),s(1,"Upload Drag&drop"),r(),a(2,"div",1)(3,"div",2)(4,"div",3)(5,"it-upload-drag-drop",4,0),u("fileStartUpload",function(){return A(l),k(o.onDragUploadStart())}),r()()()()}},dependencies:[Q],encapsulation:2});let n=i;return n})();var Y=(()=>{let i=class i{constructor(){this.httpClient=C(F),this.uploadedFileList=[{id:0,file:new File([],"nome-file-01.pdf")},{id:1,file:new File([],"nome-file-02-nome-file-lungo-per-ellissi.doc")},{id:2,file:new File([],"nome-file-03.png"),progress:43,removable:!0},{id:3,file:new File([],"nome-file-04.png"),error:!0,removable:!0}]}onUpdateFileList(t){let e=Array.from(t).map((o,l)=>({id:l+this.uploadedFileList.length,file:o,removable:!0}));this.uploadedFileList=[...this.uploadedFileList,...e]}onDeleteFileList(t){this.uploadedFileList=this.uploadedFileList.filter(e=>e.id!==t.id)}httpClientExample(){let t=this.uploadedFileList[0];t.progress=1,t.error=void 0,t.removable=!1,U(t.file.arrayBuffer()).pipe(w(e=>{let o=[...new Uint8Array(e)];return this.httpClient.post("url",o,{reportProgress:!0,observe:"events"})}),v(e=>{e.type===L.UploadProgress&&(t.progress=Math.round(e.loaded/(e.total||1)*100))}),D(e=>e.type!==L.Response),h(e=>e.body),v(()=>{t.progress=100}),I(e=>(t.progress=void 0,t.removable=!0,t.error=!0,t.tooltip=e.message,b(null))),x(()=>{!t.error&&t.progress&&t.progress<100&&(t.progress=void 0,t.removable=!0,t.error=!0,t.tooltip="Incomplete upload error")}))}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=m({type:i,selectors:[["it-upload-file-list-example"]],standalone:!1,decls:6,vars:1,consts:[[1,"bd-example"],[1,"row","my-2"],[1,"col"],[3,"uploadFiles","deleteItem","fileList"]],template:function(e,o){e&1&&(a(0,"h3"),s(1,"Upload con lista di file"),r(),a(2,"div",0)(3,"div",1)(4,"div",2)(5,"it-upload-file-list",3),u("uploadFiles",function(p){return o.onUpdateFileList(p)})("deleteItem",function(p){return o.onDeleteFileList(p)}),r()()()()),e&2&&(d(5),f("fileList",o.uploadedFileList))},dependencies:[y],encapsulation:2});let n=i;return n})();var Z=(()=>{let i=class i{constructor(){this.httpClient=C(F),this.uploadedFileList=[{id:0,file:new File([],"nome-file-01.pdf")},{id:1,file:new File([],"nome-file-02-nome-file-lungo-per-ellissi.doc")},{id:2,file:new File([],"nome-file-03.png"),progress:43,removable:!0},{id:3,file:new File([],"nome-file-04.png"),error:!0,removable:!0}]}onUpdateFileList(t){let e=Array.from(t).map((o,l)=>({id:l+this.uploadedFileList.length,file:o,removable:!0}));this.uploadedFileList=[...this.uploadedFileList,...e]}onDeleteFileList(t){this.uploadedFileList=this.uploadedFileList.filter(e=>e.id!==t.id)}httpClientExample(){let t=this.uploadedFileList[0];t.progress=1,t.error=void 0,t.removable=!1,U(t.file.arrayBuffer()).pipe(w(e=>{let o=[...new Uint8Array(e)];return this.httpClient.post("url",o,{reportProgress:!0,observe:"events"})}),v(e=>{e.type===L.UploadProgress&&(t.progress=Math.round(e.loaded/(e.total||1)*100))}),D(e=>e.type!==L.Response),h(e=>e.body),v(()=>{t.progress=100}),I(e=>(t.progress=void 0,t.removable=!0,t.error=!0,t.tooltip=e.message,b(null))),x(()=>{!t.error&&t.progress&&t.progress<100&&(t.progress=void 0,t.removable=!0,t.error=!0,t.tooltip="Incomplete upload error")}))}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=m({type:i,selectors:[["it-upload-file-list-custom-label-example"]],standalone:!1,decls:6,vars:1,consts:[[1,"bd-example"],[1,"row","my-2"],[1,"col"],["label","Carica",3,"uploadFiles","deleteItem","fileList"]],template:function(e,o){e&1&&(a(0,"h3"),s(1,"Upload con lista di file con label personalizzata"),r(),a(2,"div",0)(3,"div",1)(4,"div",2)(5,"it-upload-file-list",3),u("uploadFiles",function(p){return o.onUpdateFileList(p)})("deleteItem",function(p){return o.onDeleteFileList(p)}),r()()()()),e&2&&(d(5),f("fileList",o.uploadedFileList))},dependencies:[y],encapsulation:2});let n=i;return n})();var ee=(()=>{let i=class i{constructor(){this.httpClient=C(F),this.uploadedImageList=[]}ngOnInit(){let t=["https://picsum.photos/40/40?image=1055","https://picsum.photos/80/40?image=1056","https://picsum.photos/40/40?image=1057","https://picsum.photos/120/200?image=1058"].map(e=>this.httpClient.get(e,{responseType:"blob"}));M(t).subscribe(e=>{this.uploadedImageList=e.map((o,l)=>{let p=l===1?"nome-file-2-nome-file-lungo-per-ellissi.jpg":`nome-file-${l+1}.jpg`;return{id:l,file:new File([o],p),removable:l>1,progress:l===2?45:void 0,error:l===3}})})}onUpdateImageList(t){let e=Array.from(t).map((o,l)=>({id:l+this.uploadedImageList.length,file:o,removable:!0}));this.uploadedImageList=[...this.uploadedImageList,...e]}onDeleteImageList(t){this.uploadedImageList=this.uploadedImageList.filter(e=>e.id!==t.id)}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=m({type:i,selectors:[["it-upload-image-list-example"]],standalone:!1,decls:6,vars:1,consts:[[1,"bd-example"],[1,"row","my-2"],[1,"col"],["images","true",3,"uploadFiles","deleteItem","fileList"]],template:function(e,o){e&1&&(a(0,"h3"),s(1,"Con anteprima delle immagini"),r(),a(2,"div",0)(3,"div",1)(4,"div",2)(5,"it-upload-file-list",3),u("uploadFiles",function(p){return o.onUpdateImageList(p)})("deleteItem",function(p){return o.onDeleteImageList(p)}),r()()()()),e&2&&(d(5),f("fileList",o.uploadedImageList))},dependencies:[y],encapsulation:2});let n=i;return n})();var te=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=m({type:i,selectors:[["it-upload-examples"]],standalone:!1,decls:8,vars:0,consts:[["html",`<h3>Upload con lista di file</h3>
<div class="bd-example">
  <div class="row my-2">
    <div class="col">
      <it-upload-file-list
        [fileList]="uploadedFileList"
        (uploadFiles)="onUpdateFileList($event)"
        (deleteItem)="onDeleteFileList($event)"></it-upload-file-list>
    </div>
  </div>
</div>`,"typescript",`import { Component, inject } from '@angular/core';
import { UploadFileListItem } from 'design-angular-kit/interfaces/form';
import { catchError, finalize, from, map, of, skipWhile, switchMap, tap } from 'rxjs';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'it-upload-file-list-example',
  templateUrl: './upload-file-list-example.component.html',
  standalone: false,
})
export class UploadFileListExampleComponent {
  private readonly httpClient = inject(HttpClient);

  uploadedFileList: Array<UploadFileListItem> = [
    {
      id: 0,
      file: new File([], 'nome-file-01.pdf'),
    },
    {
      id: 1,
      file: new File([], 'nome-file-02-nome-file-lungo-per-ellissi.doc'),
    },
    {
      id: 2,
      file: new File([], 'nome-file-03.png'),
      progress: 43,
      removable: true,
    },
    {
      id: 3,
      file: new File([], 'nome-file-04.png'),
      error: true,
      removable: true,
    },
  ];

  onUpdateFileList(files: FileList): void {
    const newFiles: Array<UploadFileListItem> = Array.from(files).map((file, index) => ({
      id: index + this.uploadedFileList.length, // I set an id, useful when deleting
      file, // The uploaded file
      removable: true, // set new file as removable
    }));

    this.uploadedFileList = [...this.uploadedFileList, ...newFiles];
  }

  onDeleteFileList(item: UploadFileListItem): void {
    this.uploadedFileList = this.uploadedFileList.filter(i => i.id !== item.id);
  }

  /**
   * Example to upload file with HttpClient
   */
  httpClientExample(): void {
    const fileToUpload = this.uploadedFileList[0];
    fileToUpload.progress = 1;
    fileToUpload.error = undefined;
    fileToUpload.removable = false;

    from(fileToUpload.file.arrayBuffer()).pipe(
      // Converting the file to arrayBuffer
      switchMap(arrayBuffer => {
        const bytes = [...new Uint8Array(arrayBuffer)]; // Convert arrayBuffer to Array<number>

        // NOTE: File conversion depends on your server / API
        // If you want to transform the file to base64 you can use the helper function
        // import {FileUtils} from "design-angular-kit";
        // const base64 = FileUtils.fileToBase64(fileToUpload.file)

        return this.httpClient.post<any>('url', bytes, {
          reportProgress: true,
          observe: 'events',
        });
      }),
      tap(event => {
        // Update the progress request status
        if (event.type === HttpEventType.UploadProgress) {
          fileToUpload.progress = Math.round((event.loaded / (event.total || 1)) * 100);
        }
      }),
      skipWhile(event => event.type !== HttpEventType.Response), // skip while the request not is complete
      map(event => (event as HttpResponse<any>).body), // request is complete with body
      tap(() => {
        fileToUpload.progress = 100;
      }),
      catchError(error => {
        fileToUpload.progress = undefined;
        fileToUpload.removable = true;
        fileToUpload.error = true;
        fileToUpload.tooltip = error.message; // Show error message as tooltip
        return of(null); // File upload failed
      }),
      finalize(() => {
        if (!fileToUpload.error && fileToUpload.progress && fileToUpload.progress < 100) {
          // There are no errors but the file upload is not complete
          fileToUpload.progress = undefined;
          fileToUpload.removable = true;
          fileToUpload.error = true;
          fileToUpload.tooltip = 'Incomplete upload error'; // Show error message as tooltip
        }
      })
    );
  }
}`],["html",`<h3>Con anteprima delle immagini</h3>
<div class="bd-example">
  <div class="row my-2">
    <div class="col">
      <it-upload-file-list
        [fileList]="uploadedImageList"
        images="true"
        (uploadFiles)="onUpdateImageList($event)"
        (deleteItem)="onDeleteImageList($event)"></it-upload-file-list>
    </div>
  </div>
</div>`,"typescript",`import { Component, OnInit, inject } from '@angular/core';
import { UploadFileListItem } from 'design-angular-kit/interfaces/form';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'it-upload-image-list-example',
  templateUrl: './upload-image-list-example.component.html',
  standalone: false,
})
export class UploadImageListExampleComponent implements OnInit {
  private readonly httpClient = inject(HttpClient);

  uploadedImageList: Array<UploadFileListItem> = [];

  ngOnInit() {
    const images$ = [
      'https://picsum.photos/40/40?image=1055',
      'https://picsum.photos/80/40?image=1056',
      'https://picsum.photos/40/40?image=1057',
      'https://picsum.photos/120/200?image=1058',
    ].map(url => this.httpClient.get(url, { responseType: 'blob' }));

    forkJoin(images$).subscribe(blobImages => {
      this.uploadedImageList = blobImages.map((blob, index) => {
        const fileName = index === 1 ? 'nome-file-2-nome-file-lungo-per-ellissi.jpg' : \`nome-file-\${index + 1}.jpg\`;
        return {
          id: index,
          file: new File([blob], fileName),
          removable: index > 1,
          progress: index === 2 ? 45 : undefined,
          error: index === 3,
        };
      });
    });
  }

  onUpdateImageList(files: FileList): void {
    const newFiles: Array<UploadFileListItem> = Array.from(files).map((file, index) => ({
      id: index + this.uploadedImageList.length, // I set an id, useful when deleting
      file, // The uploaded file
      removable: true, // set new file as removable
    }));

    this.uploadedImageList = [...this.uploadedImageList, ...newFiles];
  }

  onDeleteImageList(item: UploadFileListItem): void {
    this.uploadedImageList = this.uploadedImageList.filter(i => i.id !== item.id);
  }
}`],["html",`<h3>Upload Drag&drop</h3>
<div class="bd-example">
  <div class="row my-2">
    <div class="col">
      <it-upload-drag-drop (fileStartUpload)="onDragUploadStart()" #uploadDragDropComponent></it-upload-drag-drop>
    </div>
  </div>
</div>`,"typescript",`import { Component, ViewChild } from '@angular/core';
import { interval, map, take } from 'rxjs';
import { ItUploadDragDropComponent } from 'design-angular-kit/components/form/upload-drag-drop/upload-drag-drop.component';

@Component({
  selector: 'it-upload-drag-drop-example',
  templateUrl: './upload-drag-drop-example.component.html',
  standalone: false,
})
export class UploadDragDropExampleComponent {
  @ViewChild('uploadDragDropComponent') uploadDragDropComponent!: ItUploadDragDropComponent;

  onDragUploadStart(): void {
    interval(1000)
      .pipe(
        // Simulate upload of single file
        take(100),
        map(x => (x + 1) * 10) // Start from 1, end 100
      )
      .subscribe(progress => {
        this.uploadDragDropComponent.progress(progress);
        if (progress >= 100) {
          setTimeout(() => {
            this.uploadDragDropComponent.reset();
          }, 2000);
        }
      });
  }
}`]],template:function(e,o){e&1&&c(0,"it-upload-file-list-example")(1,"it-source-display",0)(2,"it-upload-file-list-custom-label-example")(3,"it-source-display",0)(4,"it-upload-image-list-example")(5,"it-source-display",1)(6,"it-upload-drag-drop-example")(7,"it-source-display",2)},dependencies:[W,Y,Z,ee,K],encapsulation:2});let n=i;return n})();var ie=(()=>{let i=class i{constructor(){this.fileListComponent=S.components.find(t=>t.name==="ItUploadFileListComponent"),this.dragDropComponent=S.components.find(t=>t.name==="ItUploadDragDropComponent")}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=m({type:i,selectors:[["it-upload-index"]],standalone:!1,decls:15,vars:3,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"mt-3"],["label","API",1,"mt-3"],[3,"component"]],template:function(e,o){e&1&&(a(0,"h1",0),s(1,"Upload"),r(),a(2,"p",1),s(3,"Elementi dei form dedicati al caricamento file."),r(),c(4,"div",2),a(5,"it-tab-container")(6,"it-tab-item",3),c(7,"it-upload-examples"),r(),a(8,"it-tab-item",4)(9,"h2"),s(10,"Upload con lista di file"),r(),c(11,"it-api-parameters",5),a(12,"h2"),s(13,"Upload Drag&drop"),r(),c(14,"it-api-parameters",5),r()()),e&2&&(d(4),f("innerHTML",o.fileListComponent.description,P),d(7),f("component",o.fileListComponent),d(3),f("component",o.dragDropComponent))},dependencies:[J,q,O,te],encapsulation:2});let n=i;return n})();var me=[{path:"",component:ie}],oe=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=E({type:i}),i.\u0275inj=T({imports:[_.forChild(me),_]});let n=i;return n})();var Ke=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=E({type:i}),i.\u0275inj=T({imports:[R,G,V,oe]});let n=i;return n})();export{Ke as UploadModule};
