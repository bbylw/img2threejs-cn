<script setup>
</script>

<template>
  <section class="section" id="features">
    <div class="section-header reveal">
      <span class="section-tag">// 核心能力</span>
      <h2 class="section-title">不只是建模，是一整套雕刻流水线</h2>
      <p class="section-subtitle">你给它一张物体的参考图，它生成一个用 TypeScript 编写的 THREE.Group 工厂函数 —— 附带运行时层级结构，让结果可以直接用于动画。</p>
    </div>
    <div class="features-grid">
      <div class="feature-card reveal">
        <div class="feature-icon">&#9670;</div>
        <h3>细节优先分析</h3>
        <p>在生成代码之前，流水线会枚举出一份 detailInventory（身份定义性小细节清单）：光泽、倒角/圆角、螺丝/铆钉、雕刻线条、污渍与磨损。每一个细节都必须对应到真实的部件或材质条目。</p>
      </div>
      <div class="feature-card reveal">
        <div class="feature-icon">&#9673;</div>
        <h3>严格质量门控</h3>
        <p>严格质量门会在生成任何一行 Three.js 代码之前，挡住过于浅显的规格。复合物体不允许只有一个根的规格 —— 快速失败，在代码生成之前。</p>
      </div>
      <div class="feature-card reveal">
        <div class="feature-icon">&#9651;</div>
        <h3>可交互就绪</h3>
        <p>模型通过 root.userData.sculptRuntime 暴露出运行时层级：枢轴（pivots）、插槽（sockets）、碰撞体（colliders）、销毁组 —— 让结果可以直接用于动画，而不是一块死物。</p>
      </div>
      <div class="feature-card reveal">
        <div class="feature-icon">&#9632;</div>
        <h3>省 Token 设计</h3>
        <p>脚本负责执行，模型负责判断。Python 脚本处理校验、门控、规格编写、PBR 提取、对比图打包。模型的 token 只花在一件事上：看一张对比图，决定通过还是不通过。</p>
      </div>
      <div class="feature-card wide reveal">
        <div>
          <div class="feature-icon">&#9678;</div>
          <h3>角色与物体双轨道</h3>
          <p>每个主题会被分类为 object（物体）、character（角色）或 hybrid（混合）。物体走硬表面流水线；角色则进入具备解剖学意识的轨道 —— 头身比例、面部关键点、姿态系统、投影优先的相似度最大化路径。</p>
        </div>
        <div>
          <div class="feature-icon">&#9733;</div>
          <h3>零依赖，零安装</h3>
          <p>每个脚本都是纯 Python 3.10+ 标准库。没有 pip，没有 PIL，没有 numpy，没有 Playwright。PNG 的读写用 struct 和 zlib 完成。无需安装，就意味着上下文中没有需要调试的东西。</p>
        </div>
      </div>
    </div>
  </section>
</template>
