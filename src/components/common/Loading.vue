<template>
  <div class="bounce">
    <svg
      width="106"
      height="106"
      viewBox="0 0 106 106"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="53"
        cy="53"
        r="51"
        fill="white"
        stroke="#333333"
        stroke-width="4"
      />
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="106"
        height="53"
      >
        <rect width="106" height="53" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0)">
        <circle
          cx="53"
          cy="53"
          r="51"
          fill="#F22539"
          stroke="#333333"
          stroke-width="4"
        />
      </g>
      <path d="M0.392578 53H105.607" stroke="#333333" stroke-width="4" />
      <circle cx="53" cy="52.9998" r="20.8074" fill="white" />
      <circle
        cx="53"
        cy="52.9998"
        r="18.8074"
        stroke="#333333"
        stroke-width="4"
      />
      <path
        d="M91.731 36.7077C86.9398 25.3318 77.283 16.5081 65.3667 12.8428"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle
        cx="53.0001"
        cy="53.0004"
        r="10.3852"
        stroke="#808080"
        stroke-width="2"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped>
.bounce {
  position: absolute;
  top: 45%;
  left: 45%;
  width: 60px;
  height: 60px;
  margin-left: -30px;
  animation: bounce 2.5s infinite;
  -webkit-animation: bounce 2.5s infinite;
  -moz-animation: bounce 2.5s infinite;
  -o-animation: bounce 2.5s infinite;
}

@-webkit-keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    -webkit-transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-30px);
  }
  60% {
    -webkit-transform: translateY(-15px);
  }
}

@-moz-keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    -moz-transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-30px);
  }
  60% {
    -moz-transform: translateY(-15px);
  }
}

@-o-keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    -o-transform: translateY(0);
  }
  40% {
    -o-transform: translateY(-30px);
  }
  60% {
    -o-transform: translateY(-15px);
  }
}
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
</style>