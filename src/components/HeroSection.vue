<script setup>
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-badge">v1.3.0 已发布</div>
      <h1>从参考图到<br><span class="highlight">程序化 Three.js</span> 模型</h1>
      <p class="hero-desc">将参考图中的物体，以纯代码、程序化的方式重建为 Three.js 模型。经过质量门控、可直接用于动画，并刻意做到省 token —— 通过代码重建，而非摄影测量、网格提取或下载素材包。</p>
      <div class="hero-actions">
        <a href="#quickstart" class="btn-primary">快速开始</a>
        <a href="https://img2threejs-showcase.pages.dev/" class="btn-secondary" target="_blank">在线演示画廊</a>
      </div>
    </div>
    <div class="hero-visual">
      <div class="hero-canvas">
        <div class="hero-canvas-inner">
          <div class="wireframe-cube">
            <div class="face"></div>
            <div class="face"></div>
            <div class="face"></div>
            <div class="face"></div>
            <div class="face"></div>
            <div class="face"></div>
          </div>
        </div>
        <div class="grid-floor"></div>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-value">0</span>
            <span class="stat-label">依赖安装</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">8</span>
            <span class="stat-label">构建阶段</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">~80k</span>
            <span class="stat-label">Token / 物体</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">TS</span>
            <span class="stat-label">输出格式</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
