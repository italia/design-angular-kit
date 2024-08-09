import { Component } from '@angular/core';
import { NavscrollItems } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-navscroll-tb',
  templateUrl: './navscroll-tb.component.html',
})
export class NavscrollTbComponent {
  readonly header = 'Default example';
  readonly items = [
    {
      title: 'Prima Sezione',
      text: 'Testo prima sezione. Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      href: 'primaSezione',
      childs: [
        {
          title: 'Sottosezione 1.1',
          text: 'Testo sottosezione 1.1. Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
          href: 's11',
          childs: [
            {
              title: 'Sottosezione 1.1.1',
              text: 'Testo sottosezione 1.1.1. Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
              href: 's111',
              childs: [
                {
                  title: 'Sottosezione 1.1.1.1',
                  text: 'Testo sottosezione 1.1.1.1. Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                  href: 's1111',
                  childs: [],
                },
              ],
            },
            {
              title: 'Sottosezione 1.1.2',
              text: 'Testo sottosezione 1.1.2. Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
              href: 's112',
              childs: [],
            },
          ],
        },
        {
          title: 'Sottosezione 1.2',
          text: 'Testo sottosezione 1.2. Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
          href: 's12',
          childs: [],
        },
        {
          title: 'Sottosezione 1.3',
          text: 'Testo sottosezione 1.3. Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
          href: 's13',
          childs: [],
        },
      ],
    },
    {
      title: 'Seconda Sezione',
      text: 'Testo seconda sezione. Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      href: 'secondaSezione',
      childs: [
        {
          title: 'Sottosezione 2.1',
          text: 'Testo sottosezione 2.1. Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
          href: 's21',
          childs: [
            {
              title: 'Sottosezione 2.1.1',
              text: 'Testo sottosezione 2.1.1. Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
              href: 's211',
              childs: [],
            },
          ],
        },
        {
          title: 'Sottosezione 2.2',
          text: 'Testo sottosezione 2.2. Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
          href: 's22',
          childs: [],
        },
      ],
    },
  ] satisfies NavscrollItems;
}