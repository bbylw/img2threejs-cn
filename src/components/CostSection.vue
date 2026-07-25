<script setup>
</script>

<template>
  <section class="section cost-section" id="cost">
    <div class="section-header reveal">
      <span class="section-tag">// Token 成本分析</span>
      <h2 class="section-title">昂贵的上下文，只留给视觉判断</h2>
      <p class="section-subtitle">确定性脚本贡献接近零的模型 token。校验、门控、细节计数、对比图打包、流水线状态 —— 从不消耗上下文。</p>
    </div>
    <div class="reveal">
      <table class="cost-table">
        <thead>
          <tr>
            <th>阶段</th>
            <th>预估模型 Token</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>确定性脚本（探测、评估、规格、校验、生成、同步）</td>
            <td class="cost-value">~2k-5k 合计</td>
            <td>作为子进程运行，几乎免费</td>
          </tr>
          <tr>
            <td>读取参考图像</td>
            <td class="cost-value">&lt;1k</td>
            <td>小尺寸参考图；高分辨率成本更高</td>
          </tr>
          <tr>
            <td>编写评估 + 细节清单 + 规格 JSON</td>
            <td class="cost-value">~15k-25k</td>
            <td>规格是最大的文本产物</td>
          </tr>
          <tr>
            <td>编写与编辑 Three.js 工厂</td>
            <td class="cost-value">~20k-45k</td>
            <td>随部件数量和编辑迭代线性增长</td>
          </tr>
          <tr>
            <td>渲染-评审循环（5-8 轮）</td>
            <td class="cost-value">~30k-70k</td>
            <td>主要成本；随循环数线性增长</td>
          </tr>
          <tr class="cost-total">
            <td>单个物体总计</td>
            <td class="cost-value">~80k-180k</td>
            <td>简单/少循环 到 复杂/多循环</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="cost-cards">
      <div class="cost-card reveal">
        <div class="cost-num">~5k-12k</div>
        <h4>单次渲染-评审循环</h4>
        <p>截图（工具调用 ~0）+ 打包对比图（子进程 ~0）+ 视觉检查（~2k-3k）+ 撰写评审（~1k-2k）</p>
      </div>
      <div class="cost-card reveal">
        <div class="cost-num">~150k-350k</div>
        <h4>角色重建成本</h4>
        <p>角色需要更多评审循环，加上关键点和投影检查。使用 v1.2 角色生成器进行完整的风格化或相似度最大化重建。</p>
      </div>
      <div class="cost-card reveal">
        <div class="cost-num">~10k-20k</div>
        <h4>每道门节省的成本</h4>
        <p>严格质量门阻止规格不足的代码生成，细节清单门阻止遗漏细节 —— 每次避免的错误渲染节省约一个完整循环。</p>
      </div>
    </div>
  </section>
</template>
