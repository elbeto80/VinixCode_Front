<template>
    <div class="content-wrapper">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Página no encontrada</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><router-link to="/">Inicio</router-link></li>
                            <li class="breadcrumb-item active">404 Not Found</li>
                        </ol>
                    </div>
                </div>
            </div>
            <hr style="margin: 0;" />
        </section>

        <section class="content">
            <div class="card card-solid">
                <div class="card-body padding_07em">
                    <div class="error-page">
                        <h2 class="headline text-warning"> 404</h2>
                        <div class="error-content">
                            <h3><i class="fas fa-exclamation-triangle text-warning"></i> Oops! Página No Encontrada.</h3>
                            <p>
                                No pudimos encontrar la página que estabas buscando. Mientras tanto, puedes
                                <router-link to="/">Regrear al Inicio</router-link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },

        methods: {
        },

        mounted() {
        }
    }
</script>
