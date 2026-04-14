import{a as O,b as T,c as q,d as Q}from"./chunk-ZWYEEAVU.js";import{Aa as U,ca as $,la as B,ma as N,za as z}from"./chunk-Y2IIYB6J.js";import"./chunk-MLMGL4QO.js";import{h as _}from"./chunk-F32MIGDQ.js";import{F as C,H as L,m as R}from"./chunk-66PP3R5H.js";import{$b as k,B as j,E as b,Gb as d,Hb as a,Ib as l,J as I,Jb as u,L as D,N as h,Sa as H,Ub as f,V as E,Wa as m,Z as v,_b as A,ac as P,fc as r,i as F,ib as s,j as y,jb as w,o as g,u as M,v as S,y as x}from"./chunk-W4MA7LB5.js";import"./chunk-GAL4ENT6.js";var ee=["uploadDragDropComponent"],W=(()=>{class o{onDragUploadStart(){S(1e3).pipe(j(100),g(t=>(t+1)*10)).subscribe(t=>{this.uploadDragDropComponent.progress(t),t>=100&&setTimeout(()=>{this.uploadDragDropComponent.reset()},2e3)})}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275cmp=s({type:o,selectors:[["it-upload-drag-drop-example"]],viewQuery:function(e,i){if(e&1&&A(ee,5),e&2){let n;k(n=P())&&(i.uploadDragDropComponent=n.first)}},standalone:!1,decls:7,vars:0,consts:[["uploadDragDropComponent",""],[1,"bd-example"],[1,"row","my-2"],[1,"col"],[3,"fileStartUpload"]],template:function(e,i){e&1&&(a(0,"h3"),r(1,"Upload Drag&drop"),l(),a(2,"div",1)(3,"div",2)(4,"div",3)(5,"it-upload-drag-drop",4,0),f("fileStartUpload",function(){return i.onDragUploadStart()}),l()()()())},dependencies:[z],encapsulation:2})}}return o})();var V=(()=>{class o{constructor(){this.httpClient=v(L),this.uploadedFileList=[{id:0,file:new File([],"nome-file-01.pdf")},{id:1,file:new File([],"nome-file-02-nome-file-lungo-per-ellissi.doc")},{id:2,file:new File([],"nome-file-03.png"),progress:43,removable:!0},{id:3,file:new File([],"nome-file-04.png"),error:!0,removable:!0}]}onUpdateFileList(t){let e=Array.from(t).map((i,n)=>({id:n+this.uploadedFileList.length,file:i,removable:!0}));this.uploadedFileList=[...this.uploadedFileList,...e]}onDeleteFileList(t){this.uploadedFileList=this.uploadedFileList.filter(e=>e.id!==t.id)}httpClientExample(){let t=this.uploadedFileList[0];t.progress=1,t.error=void 0,t.removable=!1,F(t.file.arrayBuffer()).pipe(D(e=>{let i=[...new Uint8Array(e)];return this.httpClient.post("url",i,{reportProgress:!0,observe:"events"})}),h(e=>{e.type===C.UploadProgress&&(t.progress=Math.round(e.loaded/(e.total||1)*100))}),I(e=>e.type!==C.Response),g(e=>e.body),h(()=>{t.progress=100}),x(e=>(t.progress=void 0,t.removable=!0,t.error=!0,t.tooltip=e.message,y(null))),b(()=>{!t.error&&t.progress&&t.progress<100&&(t.progress=void 0,t.removable=!0,t.error=!0,t.tooltip="Incomplete upload error")}))}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275cmp=s({type:o,selectors:[["it-upload-file-list-example"]],standalone:!1,decls:6,vars:1,consts:[[1,"bd-example"],[1,"row","my-2"],[1,"col"],[3,"uploadFiles","deleteItem","fileList"]],template:function(e,i){e&1&&(a(0,"h3"),r(1,"Upload con lista di file"),l(),a(2,"div",0)(3,"div",1)(4,"div",2)(5,"it-upload-file-list",3),f("uploadFiles",function(p){return i.onUpdateFileList(p)})("deleteItem",function(p){return i.onDeleteFileList(p)}),l()()()()),e&2&&(m(5),d("fileList",i.uploadedFileList))},dependencies:[U],encapsulation:2})}}return o})();var G=(()=>{class o{constructor(){this.httpClient=v(L),this.uploadedFileList=[{id:0,file:new File([],"nome-file-01.pdf")},{id:1,file:new File([],"nome-file-02-nome-file-lungo-per-ellissi.doc")},{id:2,file:new File([],"nome-file-03.png"),progress:43,removable:!0},{id:3,file:new File([],"nome-file-04.png"),error:!0,removable:!0}]}onUpdateFileList(t){let e=Array.from(t).map((i,n)=>({id:n+this.uploadedFileList.length,file:i,removable:!0}));this.uploadedFileList=[...this.uploadedFileList,...e]}onDeleteFileList(t){this.uploadedFileList=this.uploadedFileList.filter(e=>e.id!==t.id)}httpClientExample(){let t=this.uploadedFileList[0];t.progress=1,t.error=void 0,t.removable=!1,F(t.file.arrayBuffer()).pipe(D(e=>{let i=[...new Uint8Array(e)];return this.httpClient.post("url",i,{reportProgress:!0,observe:"events"})}),h(e=>{e.type===C.UploadProgress&&(t.progress=Math.round(e.loaded/(e.total||1)*100))}),I(e=>e.type!==C.Response),g(e=>e.body),h(()=>{t.progress=100}),x(e=>(t.progress=void 0,t.removable=!0,t.error=!0,t.tooltip=e.message,y(null))),b(()=>{!t.error&&t.progress&&t.progress<100&&(t.progress=void 0,t.removable=!0,t.error=!0,t.tooltip="Incomplete upload error")}))}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275cmp=s({type:o,selectors:[["it-upload-file-list-custom-label-example"]],standalone:!1,decls:6,vars:1,consts:[[1,"bd-example"],[1,"row","my-2"],[1,"col"],["label","Carica",3,"uploadFiles","deleteItem","fileList"]],template:function(e,i){e&1&&(a(0,"h3"),r(1,"Upload con lista di file con label personalizzata"),l(),a(2,"div",0)(3,"div",1)(4,"div",2)(5,"it-upload-file-list",3),f("uploadFiles",function(p){return i.onUpdateFileList(p)})("deleteItem",function(p){return i.onDeleteFileList(p)}),l()()()()),e&2&&(m(5),d("fileList",i.uploadedFileList))},dependencies:[U],encapsulation:2})}}return o})();var K=(()=>{class o{constructor(){this.httpClient=v(L),this.uploadedImageList=[]}ngOnInit(){let t=["https://picsum.photos/40/40?image=1055","https://picsum.photos/80/40?image=1056","https://picsum.photos/40/40?image=1057","https://picsum.photos/120/200?image=1058"].map(e=>this.httpClient.get(e,{responseType:"blob"}));M(t).subscribe(e=>{this.uploadedImageList=e.map((i,n)=>{let p=n===1?"nome-file-2-nome-file-lungo-per-ellissi.jpg":`nome-file-${n+1}.jpg`;return{id:n,file:new File([i],p),removable:n>1,progress:n===2?45:void 0,error:n===3}})})}onUpdateImageList(t){let e=Array.from(t).map((i,n)=>({id:n+this.uploadedImageList.length,file:i,removable:!0}));this.uploadedImageList=[...this.uploadedImageList,...e]}onDeleteImageList(t){this.uploadedImageList=this.uploadedImageList.filter(e=>e.id!==t.id)}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275cmp=s({type:o,selectors:[["it-upload-image-list-example"]],standalone:!1,decls:6,vars:1,consts:[[1,"bd-example"],[1,"row","my-2"],[1,"col"],["images","true",3,"uploadFiles","deleteItem","fileList"]],template:function(e,i){e&1&&(a(0,"h3"),r(1,"Con anteprima delle immagini"),l(),a(2,"div",0)(3,"div",1)(4,"div",2)(5,"it-upload-file-list",3),f("uploadFiles",function(p){return i.onUpdateImageList(p)})("deleteItem",function(p){return i.onDeleteImageList(p)}),l()()()()),e&2&&(m(5),d("fileList",i.uploadedImageList))},dependencies:[U],encapsulation:2})}}return o})();var X=(()=>{class o{static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275cmp=s({type:o,selectors:[["it-upload-examples"]],standalone:!1,decls:8,vars:0,consts:[["html",`<h3>Upload con lista di file</h3>
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
}`]],template:function(e,i){e&1&&u(0,"it-upload-file-list-example")(1,"it-source-display",0)(2,"it-upload-file-list-custom-label-example")(3,"it-source-display",0)(4,"it-upload-image-list-example")(5,"it-source-display",1)(6,"it-upload-drag-drop-example")(7,"it-source-display",2)},dependencies:[O,V,G,K,W],encapsulation:2})}}return o})();var Y=(()=>{class o{constructor(){this.fileListComponent=T.components.find(t=>t.name==="ItUploadFileListComponent"),this.dragDropComponent=T.components.find(t=>t.name==="ItUploadDragDropComponent")}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275cmp=s({type:o,selectors:[["it-upload-index"]],standalone:!1,decls:15,vars:3,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"mt-3"],["label","API",1,"mt-3"],[3,"component"]],template:function(e,i){e&1&&(a(0,"h1",0),r(1,"Upload"),l(),a(2,"p",1),r(3,"Elementi dei form dedicati al caricamento file."),l(),u(4,"div",2),a(5,"it-tab-container")(6,"it-tab-item",3),u(7,"it-upload-examples"),l(),a(8,"it-tab-item",4)(9,"h2"),r(10,"Upload con lista di file"),l(),u(11,"it-api-parameters",5),a(12,"h2"),r(13,"Upload Drag&drop"),l(),u(14,"it-api-parameters",5),l()()),e&2&&(m(4),d("innerHTML",i.fileListComponent.description,H),m(7),d("component",i.fileListComponent),m(3),d("component",i.dragDropComponent))},dependencies:[q,N,B,X],encapsulation:2})}}return o})();var ae=[{path:"",component:Y}],Z=(()=>{class o{static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275mod=w({type:o})}static{this.\u0275inj=E({imports:[_.forChild(ae),_]})}}return o})();var We=(()=>{class o{static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275mod=w({type:o})}static{this.\u0275inj=E({imports:[R,Q,$,Z]})}}return o})();export{We as UploadModule};
