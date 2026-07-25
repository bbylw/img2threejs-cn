<script setup>
</script>

<template>
  <section class="section cost-section" id="upgrade">
    <div class="section-header reveal">
      <span class="section-tag">// 升级计划摘要</span>
      <h2 class="section-title">双轨道升级：细节优先 + 角色重建</h2>
      <p class="section-subtitle">v1.1 解决微观细节捕获不足；v1.2 增加一等公民的角色轨道，从比例、姿态、面部关键点到衣物与配色。</p>
    </div>
    <div class="features-grid">
      <div class="feature-card reveal">
        <div class="feature-icon">A</div>
        <h3>Track A — 细节优先分析 (v1.1)</h3>
        <p>新增 detailInventory 产物：每个细节必须设定 affects（几何/材质）并 mapsTo 真实的组件或材质条目。支持 15 种细节类型：gloss、bevel、fastener、linework、contour、seam、stitch、stain、scratch、chip、decal、emissive、hole、groove、ridge。严格质量门在代码生成前阻止未链接的细节。</p>
      </div>
      <div class="feature-card reveal">
        <div class="feature-icon">B</div>
        <h3>Track B — 角色重建 (v1.2)</h3>
        <p>新增角色轨道：primaryDomain 分类、anatomy 数据模型（头身比例、面部关键点、姿态）、人形组件模板、proportion-lock 与 feature-placement 构建通道。投影优先路径：参数化模板拟合 + 去光照片投影 + 相机匹配，最大化相似度。</p>
      </div>
    </div>
    <div class="cost-cards" style="margin-top: 2rem;">
      <div class="cost-card reveal">
        <h4>设计原则</h4>
        <p>脚本负责强制执行与打包；agent 的视觉负责判断。纯 Python 3.10+ 标准库。Token 效率不变：新门控在代码生成前快速失败。向后兼容：1.0 物体规格仍然有效。</p>
      </div>
      <div class="cost-card reveal">
        <h4>相似度最大化</h4>
        <p>参数化模板拟合（SMPL-X 思路）+ 照片纹理投影 + 去光处理 + 相机匹配。单张图像无法保证 100% 相似度 —— 流水线按区域报告置信度，并在关键处请求更多视角。</p>
      </div>
      <div class="cost-card reveal">
        <h4>坦诚的局限</h4>
        <p>单张图像无法揭示被遮挡的侧面。硬表面物体表现出色；角色是风格化重建，而非照片级相似。"从这张图像无法达到所要求的保真度"是一个有效且可预期的结果。</p>
      </div>
    </div>
  </section>
</template>
