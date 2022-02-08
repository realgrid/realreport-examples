<template>

  <RealReport :report="resultReport" />
</template>

<script>
import resultReport from "../../report-samples/resultReport";

export default {
  name: 'IndexPage',
  data() {
    return {
      resultReport
    }
  },
}
</script>
