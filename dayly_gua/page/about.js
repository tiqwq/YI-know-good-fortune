import { createWidget, widget, align, prop, text_style, event } from '@zos/ui'
Page({
  build() {
    const img = createWidget(widget.IMG, {
      x:0,
      y: 0,
      src: 'about.png'
    })

  }
})