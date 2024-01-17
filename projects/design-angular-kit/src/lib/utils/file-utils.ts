import { Observable } from 'rxjs';

export class ItFileUtils {

  /**
   * Return the file size string
   * @param file the file
   * @param decimals decimal to show
   */
  public static getFileSizeString(file: File, decimals = 2): string {
    const bytes = file.size;
    if (!+bytes) {
      return '0 Bytes';
    }

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  }

  /**
   * Convert a file to base64 string
   * @param file the base64 string
   */
  public static fileToBase64(file: File): Observable<string> {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Observable<string>(observer => {
      reader.onload = (e) => {
        const target = e.target;
        if (!target?.result || target.result instanceof ArrayBuffer) {
          return observer.error('Error on parse');
        }
        observer.next(target.result);
        observer.complete();
      };
      reader.onerror = error => {
        observer.error(error);
      };
    });
  }

  /**
   * Convert base64 to Blob
   * @param base64 the base64 string
   * @param mimeType the <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types">MIME type</a> (example 'application/pdf')
   */
  public static base64ToBlob(base64: string, mimeType: string): Blob {
    const byteString = window.atob(base64);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    return new Blob([int8Array], { type: mimeType });
  }

  /**
   * Convert base64 to File
   * @param base64 the base64 string
   * @param mimeType the <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types">MIME type</a> (example 'application/pdf')
   * @param filename the file name
   */
  public static base64ToFile(base64: string, mimeType: string, filename: string): File {
    const fileBlob = ItFileUtils.base64ToBlob(base64, mimeType);
    return new File([fileBlob], filename, { type: mimeType });
  }

  /**
   * Extract the MIME type from base64 string
   * @param base64 the base64 string
   */
  public static getMimeTypeFromBase64(base64: string): string|undefined {
    const mime = base64.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);
    return mime?.length ? mime[1] : undefined;
  }
}
