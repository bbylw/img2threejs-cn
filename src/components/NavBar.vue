<script setup>
import { ref } from 'vue'
import { useNavScroll } from '../composables/useNavScroll'

const navRef = ref(null)
useNavScroll(navRef)
</script>

<template>
  <nav class="nav" ref="navRef">
    <a href="#" class="nav-logo">
      <img src="/logo.svg" alt="img2threejs" class="nav-logo-img" />
      img2<span>threejs</span>
    </a>
    <ul class="nav-links">
      <li><a href="#features">功能</a></li>
      <li><a href="#pipeline">工作原理</a></li>
      <li><a href="#demos">演示</a></li>
      <li><a href="#cost">Token 成本</a></li>
      <li><a href="#roadmap">路线图</a></li>
      <li><a href="#quickstart">快速开始</a></li>
    </ul>
  </nav>
</template>
