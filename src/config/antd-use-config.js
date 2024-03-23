// 按需引入antd组件
import { Button, Card, Form, Input, Radio } from 'ant-design-vue'

const components = [Button, Card, Form, Input, Radio]

export default function (app) {
  components.forEach(component => {
    app.use(component)
  })
}
