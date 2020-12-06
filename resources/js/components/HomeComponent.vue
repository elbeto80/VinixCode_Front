<template>
    <div class="content-wrapper">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Inicio</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item active">Inicio</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>

        <section class="content">
            <div class="card card-solid">
                <div class="card-body">
                    <div class="row">

                        <div class="col-lg-3 col-6">
                            <div class="small-box bg-success">
                                <div class="inner">
                                    <h3 v-text="categoriesTotal"></h3>
                                    <p>Categorías</p>
                                </div>
                                <div class="icon">
                                    <i class="fas fa-paw"></i>
                                </div>
                                <router-link to="/categories" class="small-box-footer">
                                    Ver más <i class="fas fa-arrow-circle-right"></i>
                                </router-link>
                            </div>
                        </div>

                        <div class="col-lg-3 col-6">
                            <div class="small-box bg-info">
                                <div class="inner">
                                    <h3 v-text="tagsTotal"></h3>
                                    <p>Etiquetas</p>
                                </div>
                                <div class="icon">
                                    <i class="fas fa-tags"></i>
                                </div>
                                <router-link to="/tags" class="small-box-footer">
                                    Ver más <i class="fas fa-arrow-circle-right"></i>
                                </router-link>
                            </div>
                        </div>

                        <div class="col-lg-3 col-6">
                            <div class="small-box bg-secondary">
                                <div class="inner">
                                    <h3 v-text="petsTotal"></h3>
                                    <p>Mascotas</p>
                                </div>
                                <div class="icon">
                                    <i class="fas fa-dog nav-icon"></i>
                                </div>
                                <router-link to="/pets" class="small-box-footer">
                                    Ver más <i class="fas fa-arrow-circle-right"></i>
                                </router-link>
                            </div>
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
                tagsTotal: '',
                categoriesTotal: '',
                petsTotal: '',
            }
        },

        methods: {
            async paramsHome() {
                CargandoSweet(0, 'Cargando...');
                let me = this;
                await axios.get(urlApi+'/home')
                .then(function (response) {
                    CargandoSweet(1);
                    if(response.data.error) {
                        Success_Error_Mostrar('Error', response.data.info, 'error');
                        return false;
                    }
                    let data = response.data;
                    me.petsTotal        = data.info.petsTotal;
                    me.tagsTotal        = data.info.tagsTotal;
                    me.categoriesTotal  = data.info.categoriesTotal;
                })
                .catch(function (error) {
                    CargandoSweet(1);
                    console.log(error);
                    Success_Error_Mostrar('Error', error, 'error');
                });
            }
        },

        async mounted() {
            await this.paramsHome();
        }
    }
</script>
