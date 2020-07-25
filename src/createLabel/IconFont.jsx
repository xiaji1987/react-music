import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons'
const IconFonts = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1960252_ebeuu8zf8k.js',
});

function IconFont(props) {
  return (
    <IconFonts type={props.type}/>
  );
}

export default IconFont;