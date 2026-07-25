<script setup>
</script>

<template>
  <section class="section" id="scripts">
    <div class="section-header reveal">
      <span class="section-tag">// 脚本一览</span>
      <h2 class="section-title">确定性脚本，零依赖</h2>
      <p class="section-subtitle">纯 Python 3.10+ 标准库。PNG 读写用 struct 和 zlib 完成。脚本负责管控，模型负责判断。</p>
    </div>
    <div class="scripts-grid">
      <div class="script-item reveal">
        <span class="script-path">probe_image.py</span>
        <span class="script-desc">图像元数据与明显的技术问题（非视觉检查）</span>
      </div>
      <div class="script-item reveal">
        <span class="script-path">new_pre_spec_assessment.py</span>
        <span class="script-desc">对物体分类、评估复杂度，产出质量契约</span>
      </div>
      <div class="script-item reveal">
        <span class="script-path">new_sculpt_spec.py</span>
        <span class="script-desc">基于评估编写 ObjectSculptSpec</span>
      </div>
      <div class="script-item reveal">
        <span class="script-path">validate_sculpt_spec.py</span>
        <span class="script-desc">校验规格；--strict-quality 挡住浅显规格</span>
      </div>
      <div class="script-item reveal">
        <span class="script-path">extract_pbr_evidence.py</span>
        <span class="script-desc">从参考图推导 PBR 证据（推断，非逆向渲染）</span>
      </div>
      <div class="script-item reveal">
        <span class="script-path">orchestrate_passes.py</span>
        <span class="script-desc">锁定的阶段状态：状态、检查、同步</span>
      </div>
      <div class="script-item reveal">
        <span class="script-path">generate_threejs_factory.py</span>
        <span class="script-desc">为当前已解锁阶段生成 Three.js Group 工厂</span>
      </div>
      <div class="script-item reveal">
        <span class="script-path">make_comparison_sheet.py</span>
        <span class="script-desc">打包"参考图 vs 渲染图"对比图供评审</span>
      </div>
      <div class="script-item reveal">
        <span class="script-path">build_detail_inventory.py</span>
        <span class="script-desc">将参考图切分为区域，搭建细节清单</span>
      </div>
      <div class="script-item reveal">
        <span class="script-path">extract_landmarks.py</span>
        <span class="script-desc">叠加关键点网格，为角色搭建解剖学区块</span>
      </div>
      <div class="script-item reveal">
        <span class="script-path">solve_camera_pose.py</span>
        <span class="script-desc">产出参考相机区块，使渲染能进行相机匹配</span>
      </div>
      <div class="script-item reveal">
        <span class="script-path">delight_albedo.py</span>
        <span class="script-desc">在纹理投影前，从照片中近似出中性反照率</span>
      </div>
    </div>
  </section>
</template>
