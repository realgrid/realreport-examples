<!-- Please remove this file from your project -->
<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <RealReport :report="resultReport" />
  </div>
</template>

<script>
import resultReport from "../../report-samples/resultReport";

export default {
  name: 'NuxtTutorial',
  data() {
    return {
      resultReport
    }
  },
}
</script>
