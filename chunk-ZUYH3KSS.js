import{a as Q,b as T,c as W,d as J}from"./chunk-CJGNGVIB.js";import{Aa as U,ca as z,la as V,ma as O,za as q}from"./chunk-HN3BY7NK.js";import"./chunk-MLMGL4QO.js";import{h as _}from"./chunk-A2FNTR3N.js";import{F as C,H as L,m as N}from"./chunk-3O7E6U5R.js";import{$b as R,B as j,E as b,Hb as d,Ib as r,J as I,Jb as l,Kb as u,L as D,N as h,Rb as P,Ta as k,V as w,Vb as f,Xa as m,Z as v,ac as $,bc as B,ca as H,da as A,gc as p,i as F,j as y,jb as s,kb as E,o as g,u as M,v as S,y as x}from"./chunk-6HYXSLXH.js";import"./chunk-GAL4ENT6.js";var oe=["uploadDragDropComponent"],G=(()=>{class i{onDragUploadStart(){S(1e3).pipe(j(100),g(t=>(t+1)*10)).subscribe(t=>{this.uploadDragDropComponent.progress(t),t>=100&&setTimeout(()=>{this.uploadDragDropComponent.reset()},2e3)})}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=s({type:i,selectors:[["it-upload-drag-drop-example"]],viewQuery:function(e,o){if(e&1&&R(oe,5),e&2){let n;$(n=B())&&(o.uploadDragDropComponent=n.first)}},standalone:!1,decls:7,vars:0,consts:[["uploadDragDropComponent",""],[1,"bd-example"],[1,"row","my-2"],[1,"col"],[3,"fileStartUpload"]],template:function(e,o){if(e&1){let n=P();r(0,"h3"),p(1,"Upload Drag&drop"),l(),r(2,"div",1)(3,"div",2)(4,"div",3)(5,"it-upload-drag-drop",4,0),f("fileStartUpload",function(){return H(n),A(o.onDragUploadStart())}),l()()()()}},dependencies:[q],encapsulation:2})}}return i})();var X=(()=>{class i{constructor(){this.httpClient=v(L),this.uploadedFileList=[{id:0,file:new File([],"nome-file-01.pdf")},{id:1,file:new File([],"nome-file-02-nome-file-lungo-per-ellissi.doc")},{id:2,file:new File([],"nome-file-03.png"),progress:43,removable:!0},{id:3,file:new File([],"nome-file-04.png"),error:!0,removable:!0}]}onUpdateFileList(t){let e=Array.from(t).map((o,n)=>({id:n+this.uploadedFileList.length,file:o,removable:!0}));this.uploadedFileList=[...this.uploadedFileList,...e]}onDeleteFileList(t){this.uploadedFileList=this.uploadedFileList.filter(e=>e.id!==t.id)}httpClientExample(){let t=this.uploadedFileList[0];t.progress=1,t.error=void 0,t.removable=!1,F(t.file.arrayBuffer()).pipe(D(e=>{let o=[...new Uint8Array(e)];return this.httpClient.post("url",o,{reportProgress:!0,observe:"events"})}),h(e=>{e.type===C.UploadProgress&&(t.progress=Math.round(e.loaded/(e.total||1)*100))}),I(e=>e.type!==C.Response),g(e=>e.body),h(()=>{t.progress=100}),x(e=>(t.progress=void 0,t.removable=!0,t.error=!0,t.tooltip=e.message,y(null))),b(()=>{!t.error&&t.progress&&t.progress<100&&(t.progress=void 0,t.removable=!0,t.error=!0,t.tooltip="Incomplete upload error")}))}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=s({type:i,selectors:[["it-upload-file-list-example"]],standalone:!1,decls:6,vars:1,consts:[[1,"bd-example"],[1,"row","my-2"],[1,"col"],[3,"uploadFiles","deleteItem","fileList"]],template:function(e,o){e&1&&(r(0,"h3"),p(1,"Upload con lista di file"),l(),r(2,"div",0)(3,"div",1)(4,"div",2)(5,"it-upload-file-list",3),f("uploadFiles",function(a){return o.onUpdateFileList(a)})("deleteItem",function(a){return o.onDeleteFileList(a)}),l()()()()),e&2&&(m(5),d("fileList",o.uploadedFileList))},dependencies:[U],encapsulation:2})}}return i})();var Y=(()=>{class i{constructor(){this.httpClient=v(L),this.uploadedFileList=[{id:0,file:new File([],"nome-file-01.pdf")},{id:1,file:new File([],"nome-file-02-nome-file-lungo-per-ellissi.doc")},{id:2,file:new File([],"nome-file-03.png"),progress:43,removable:!0},{id:3,file:new File([],"nome-file-04.png"),error:!0,removable:!0}]}onUpdateFileList(t){let e=Array.from(t).map((o,n)=>({id:n+this.uploadedFileList.length,file:o,removable:!0}));this.uploadedFileList=[...this.uploadedFileList,...e]}onDeleteFileList(t){this.uploadedFileList=this.uploadedFileList.filter(e=>e.id!==t.id)}httpClientExample(){let t=this.uploadedFileList[0];t.progress=1,t.error=void 0,t.removable=!1,F(t.file.arrayBuffer()).pipe(D(e=>{let o=[...new Uint8Array(e)];return this.httpClient.post("url",o,{reportProgress:!0,observe:"events"})}),h(e=>{e.type===C.UploadProgress&&(t.progress=Math.round(e.loaded/(e.total||1)*100))}),I(e=>e.type!==C.Response),g(e=>e.body),h(()=>{t.progress=100}),x(e=>(t.progress=void 0,t.removable=!0,t.error=!0,t.tooltip=e.message,y(null))),b(()=>{!t.error&&t.progress&&t.progress<100&&(t.progress=void 0,t.removable=!0,t.error=!0,t.tooltip="Incomplete upload error")}))}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=s({type:i,selectors:[["it-upload-file-list-custom-label-example"]],standalone:!1,decls:6,vars:1,consts:[[1,"bd-example"],[1,"row","my-2"],[1,"col"],["label","Carica",3,"uploadFiles","deleteItem","fileList"]],template:function(e,o){e&1&&(r(0,"h3"),p(1,"Upload con lista di file con label personalizzata"),l(),r(2,"div",0)(3,"div",1)(4,"div",2)(5,"it-upload-file-list",3),f("uploadFiles",function(a){return o.onUpdateFileList(a)})("deleteItem",function(a){return o.onDeleteFileList(a)}),l()()()()),e&2&&(m(5),d("fileList",o.uploadedFileList))},dependencies:[U],encapsulation:2})}}return i})();var Z=(()=>{class i{constructor(){this.httpClient=v(L),this.uploadedImageList=[]}ngOnInit(){let t=["https://picsum.photos/40/40?image=1055","https://picsum.photos/80/40?image=1056","https://picsum.photos/40/40?image=1057","https://picsum.photos/120/200?image=1058"].map(e=>this.httpClient.get(e,{responseType:"blob"}));M(t).subscribe(e=>{this.uploadedImageList=e.map((o,n)=>{let a=n===1?"nome-file-2-nome-file-lungo-per-ellissi.jpg":`nome-file-${n+1}.jpg`;return{id:n,file:new File([o],a),removable:n>1,progress:n===2?45:void 0,error:n===3}})})}onUpdateImageList(t){let e=Array.from(t).map((o,n)=>({id:n+this.uploadedImageList.length,file:o,removable:!0}));this.uploadedImageList=[...this.uploadedImageList,...e]}onDeleteImageList(t){this.uploadedImageList=this.uploadedImageList.filter(e=>e.id!==t.id)}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=s({type:i,selectors:[["it-upload-image-list-example"]],standalone:!1,decls:6,vars:1,consts:[[1,"bd-example"],[1,"row","my-2"],[1,"col"],["images","true",3,"uploadFiles","deleteItem","fileList"]],template:function(e,o){e&1&&(r(0,"h3"),p(1,"Con anteprima delle immagini"),l(),r(2,"div",0)(3,"div",1)(4,"div",2)(5,"it-upload-file-list",3),f("uploadFiles",function(a){return o.onUpdateImageList(a)})("deleteItem",function(a){return o.onDeleteImageList(a)}),l()()()()),e&2&&(m(5),d("fileList",o.uploadedImageList))},dependencies:[U],encapsulation:2})}}return i})();var ee=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=s({type:i,selectors:[["it-upload-examples"]],standalone:!1,decls:8,vars:0,consts:[["html",`<h3>Upload con lista di file</h3>
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
}`]],template:function(e,o){e&1&&u(0,"it-upload-file-list-example")(1,"it-source-display",0)(2,"it-upload-file-list-custom-label-example")(3,"it-source-display",0)(4,"it-upload-image-list-example")(5,"it-source-display",1)(6,"it-upload-drag-drop-example")(7,"it-source-display",2)},dependencies:[Q,X,Y,Z,G],encapsulation:2})}}return i})();var te=(()=>{class i{constructor(){this.fileListComponent=T.components.find(t=>t.name==="ItUploadFileListComponent"),this.dragDropComponent=T.components.find(t=>t.name==="ItUploadDragDropComponent")}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=s({type:i,selectors:[["it-upload-index"]],standalone:!1,decls:15,vars:3,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"mt-3"],["label","API",1,"mt-3"],[3,"component"]],template:function(e,o){e&1&&(r(0,"h1",0),p(1,"Upload"),l(),r(2,"p",1),p(3,"Elementi dei form dedicati al caricamento file."),l(),u(4,"div",2),r(5,"it-tab-container")(6,"it-tab-item",3),u(7,"it-upload-examples"),l(),r(8,"it-tab-item",4)(9,"h2"),p(10,"Upload con lista di file"),l(),u(11,"it-api-parameters",5),r(12,"h2"),p(13,"Upload Drag&drop"),l(),u(14,"it-api-parameters",5),l()()),e&2&&(m(4),d("innerHTML",o.fileListComponent.description,k),m(7),d("component",o.fileListComponent),m(3),d("component",o.dragDropComponent))},dependencies:[W,O,V,ee],encapsulation:2})}}return i})();var se=[{path:"",component:te}],ie=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275mod=E({type:i})}static{this.\u0275inj=w({imports:[_.forChild(se),_]})}}return i})();var Ge=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275mod=E({type:i})}static{this.\u0275inj=w({imports:[N,J,z,ie]})}}return i})();export{Ge as UploadModule};
