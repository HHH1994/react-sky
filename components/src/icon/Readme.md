# Button

- category: Components
- type: 表单控件


## 案例

```js


import Button from '@tbj/wheel/src/button';
import ButtonList from '@tbj/wheel/src/button/list';

<Button text={<span>确定</span>} onClick={() => { alert(0) }} />
<ButtonList list={[{
  text:'我是按钮1',
  onClick: () => { alert(1) }
},{
  text:'我是按钮2',
  color: '#F0594E',
  onClick: () => { alert(2) }
}]} more={{
  show:true,
  onClick:()=>{ alert('...') }
}}/>

```

## API

### Button

| 参数      | 说明                                     |  可选值 |默认值 |
|-----------|--------------------------------------- -|-------|--------|
|  disabled | 是否可用 | true,false  | false |
|  onClick | 按钮点击事件 |  |  |
|  text | 按钮文案 |  |   |
|  tip | 提示文案 |  |     |
|  bgColor | 按钮背景色 |  |  |
|  color | 文案颜色 |  |   |
|  borderColor | 按钮边框颜色  |   |  |
|  style | 样式 |  obj |  |