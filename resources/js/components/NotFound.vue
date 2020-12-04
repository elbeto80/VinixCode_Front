<template>
    <div class="text-center">
        <div class="error mx-auto" data-text="404">404</div>
        <div class="error-content">
            <h3><i class="fas fa-exclamation-triangle text-warning"></i> Oops! Página No Encontrada.</h3>
            <p>
                No pudimos encontrar la página que estabas buscando. Mientras tanto, puedes
                <router-link to="/">Regrear al Inicio</router-link>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {

        }
    }
</script>
