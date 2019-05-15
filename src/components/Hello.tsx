import Vue, { VNode } from 'vue'
import { Component, Watch } from 'vue-property-decorator'

@Component
export default class Hello extends Vue {
  private text = 'Hello Vuepress'

  private render(): VNode {
    return (
      <h1>
        { this.text }
      </h1>
    )
  }

  @Watch('text')
  private onInput() {
    console.log(this.text)
  }
}
