<script setup>
</script>

<template>
  <section class="section quickstart-section" id="quickstart">
    <div class="section-header reveal">
      <span class="section-tag">// 快速开始</span>
      <h2 class="section-title">三步启动</h2>
      <p class="section-subtitle">仅需 Python 3.10+ 标准库 —— 无需安装任何东西。可运行于 Claude Code、Codex 或 OpenCode 之上。</p>
    </div>
    <div class="qs-steps">
      <div class="qs-step reveal">
        <span class="qs-step-num">1</span>
        <h4>安装</h4>
        <p>把仓库克隆到你的 skills 目录下：</p>
        <div class="code-block">
          <span class="cmd">git clone</span> https://github.com/img2threejs/img2threejs.git <span class="flag">~/.claude/skills/img2threejs</span>
        </div>
      </div>
      <div class="qs-step reveal">
        <span class="qs-step-num">2</span>
        <h4>调用</h4>
        <p>附上一张物体图像，然后运行：</p>
        <div class="code-block">
          <span class="cmd">/img2threejs</span> <span class="str">Rebuild this object as a Three.js model, keep the proportions, angles, and colours.</span>
        </div>
      </div>
      <div class="qs-step reveal">
        <span class="qs-step-num">3</span>
        <h4>跟随流水线</h4>
        <p>Skill 会校验图像、撰写评估与规格、逐阶段生成工厂函数，并在每一步都向你展示并排对比图。</p>
        <div class="code-block">
          <span class="cmd">python3</span> forge/stage1_intake/probe_image.py <span class="flag">&lt;image&gt;</span><br>
          <span class="cmd">python3</span> forge/stage2_spec/new_sculpt_spec.py <span class="str">"Name"</span> <span class="flag">--image &lt;image&gt;</span><br>
          <span class="cmd">python3</span> forge/stage3_build/generate_threejs_factory.py <span class="flag">spec.json</span>
        </div>
      </div>
    </div>
  </section>
</template>
