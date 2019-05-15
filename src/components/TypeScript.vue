<script lang="tsx">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class TypeScript extends Vue {
  msg: string = 'TypeScript and tsx!'

  render() {
    return (
      <h2>
        {this.msg}
      </h2>
    )
  }
}
</script>
