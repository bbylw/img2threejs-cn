<script setup>
</script>

<template>
  <section class="pipeline-section" id="pipeline">
    <div class="pipeline-inner">
      <div class="section-header reveal">
        <span class="section-tag">// 工作原理</span>
        <h2 class="section-title">分阶段雕刻流水线</h2>
        <p class="section-subtitle">脚本负责管控每个阶段；只有 agent 的视觉判断才能批准一个阶段通过。一个阶段只有在前一个被评审并接受后才会解锁。</p>
      </div>
      <div class="pipeline-flow">
        <div class="pipeline-step reveal">
          <div class="step-dot">01</div>
          <div class="step-content">
            <h4>探测与适用性门控</h4>
            <p>分析参考图像的元数据与技术质量，判断这张图到底是不是一个可行的 3D 目标。</p>
            <span class="step-tag">probe_image.py</span>
          </div>
        </div>
        <div class="pipeline-step reveal">
          <div class="step-dot">02</div>
          <div class="step-content">
            <h4>规格预评估</h4>
            <p>对物体分类、评估复杂度，产出质量契约。枚举细节清单，设定 targetMinDetails。</p>
            <span class="step-tag">new_pre_spec_assessment.py</span>
          </div>
        </div>
        <div class="pipeline-step reveal">
          <div class="step-dot">03</div>
          <div class="step-content">
            <h4>编写 ObjectSculptSpec</h4>
            <p>基于评估编写完整的部件树、材质、重复系统、插槽规格。每个细节都必须链接到真实部件或材质。</p>
            <span class="step-tag">new_sculpt_spec.py</span>
          </div>
        </div>
        <div class="pipeline-step reveal">
          <div class="step-dot">04</div>
          <div class="step-content">
            <h4>校验与严格质量门</h4>
            <p>校验规格深度是否匹配物体复杂度。过于浅显的规格会被打回，阻止代码生成。</p>
            <span class="step-tag">validate_sculpt_spec.py --strict-quality</span>
          </div>
        </div>
        <div class="pipeline-step reveal">
          <div class="step-dot">05</div>
          <div class="step-content">
            <h4>锁定的构建阶段</h4>
            <p>草图 → 结构 → 形态精修 → 材质 → 表面 → 光照 → 交互 → 优化。代码生成器只输出当前已解锁的阶段。</p>
            <span class="step-tag">generate_threejs_factory.py</span>
          </div>
        </div>
        <div class="pipeline-step reveal">
          <div class="step-dot">06</div>
          <div class="step-content">
            <h4>渲染与视觉评审</h4>
            <p>浏览器渲染并截图，打包一张"参考图 vs 渲染图"对比图。Agent 视觉评分达到阈值方可通过。</p>
            <span class="step-tag">make_comparison_sheet.py</span>
          </div>
        </div>
        <div class="pipeline-step reveal">
          <div class="step-dot">07</div>
          <div class="step-content">
            <h4>自我修正循环</h4>
            <p>每个阶段结束后，agent 选择且仅选择一种动作：continue、refine-spec、refine-code、request-input 或 stop。</p>
            <span class="step-tag">自我修正</span>
          </div>
        </div>
        <div class="pipeline-step reveal">
          <div class="step-dot">08</div>
          <div class="step-content">
            <h4>可直接动画的 Three.js 模型</h4>
            <p>输出 TypeScript 工厂函数 + ObjectSculptSpec JSON + 每阶段对比图。可 diff、可审阅、可纳入版本控制。</p>
            <span class="step-tag">createObjectNameModel.ts</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
