<template>
  <div class="plan-item">
    <img :src="plan.operadoraLogo" />
    <h4 class="plan-name">{{plan.plano}}</h4>
    <div class="plan-data">
      <p>
        <strong>Operadora:</strong> 
        <span>{{plan.operadora}}</span>
      </p>
      <p>
        <strong>Seguimentação:</strong> 
        <span>{{plan.segmentacao}}</span>
      </p>
      <p>
        <strong>Nível:</strong>
        <span>{{plan.nivel}}</span>
      </p>
      <p>
        <strong>Preço total:</strong> 
        <span>R$ {{plan.precos &&  parseFloat(plan.precos.total).toFixed(2)}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlanItem',
  props:['plan']
}
</script>

<style scoped>
  .plan-item {
    width: 45%;
    border: 2px solid var(--text-primary);
    padding: 10px;
    display: grid;
    margin-bottom: 20px;
    grid-template-columns: 100px 1fr;
  }
  
  .plan-name {
    align-self: center;
  }
  .plan-data {
    grid-column: span 2;
  }

  .plan-data p {
    margin-top: 10px;
  }
  .plan-data span {
    margin-left: 5px;
  }

  @media (max-width: 679px) {
    .plan-item {
      width: 90%;
    }
  }

  @media (max-width: 380px) {
    .plan-item {
      width: 100%;
    }
  }
</style>