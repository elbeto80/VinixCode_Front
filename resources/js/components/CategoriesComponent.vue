<template>
    <div class="content-wrapper">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Categorías</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><router-link to="/">Inicio</router-link></li>
                            <li class="breadcrumb-item active">Categorías</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>

        <section class="content">
            <div class="card card-solid">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12  mb-3">
                            <button class="btn btn-primary" data-toggle="modal" data-target="#modalNuevaCategoria">Nueva categoría</button>
                        </div>

                        <div class="col-md-2 col-sm-6 col-xs-12">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control form-control-sm" v-model="inputSearch" @keyup.enter="getCategories">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fas fa-search"></i></span>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-sm-6 col-xs-6">
                            <button class="btn btn-primary btn-sm" value="filter" @click="getCategories">Buscar</button>
                            <button class="btn btn-secondary btn-sm" type="button" @click="clearSearch">Limpiar</button>
                        </div>

                        <div class="col-md-12">
                            <table class="table table-bordered">
                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nombre categoría</th>
                                        <th scope="col">Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-if="listCaterory.length <= 0">
                                        <td colspan="3"> <h5>No Hay Elementos Para Mostrar</h5> </td>
                                    </tr>
                                    <tr v-for="(cate,index) in listCaterory" :key="cate.id" v-else>
                                        <th scope="row" v-text="index+1"></th>
                                        <td v-text="cate.name"></td>
                                        <td>
                                            <button class="btn btn-warning btn-xs" title="Editar categoría" data-toggle="modal" data-target="#modalNuevaCategoria" @click="editCategory(cate)">
                                                <i class="nav-icon fas fa-pencil-alt"></i>
                                            </button>
                                            <button class="btn btn-danger btn-xs" title="Eliminar categoría" @click="deleteCategory(cate)">
                                                <i class="nav-icon far fa-trash-alt"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="modal fade" id="modalNuevaCategoria" tabindex="-1" aria-hidden="true" data-backdrop="static" data-keyboard="false">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel" v-text="idCategory > 0 ? 'Editar categoría' : 'Agregar categoría' "></h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" @click="clearInputs">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-md-12 form-group">
                                            <label for="categoryName">Nombre categoría</label>
                                            <input type="text" class="form-control" id="categoryName" autocomplete="off" v-model="categoryName">
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary" @click="saveCategory">Guardar</button>
                                    <button type="button" class="btn btn-secondary" id="cerrarModal" data-dismiss="modal" @click="clearInputs">Cerrar</button>
                                </div>
                                </div>
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
                idCategory: 0,
                categoryName: '',
                inputSearch: '',
                listCaterory: [],
            }
        },

        methods: {
            async saveCategory() {
                if( !this.validateInputs() ) { return false; }
                let me = this;
                CargandoSweet(0, 'Guardando...');
                await axios.post(urlApi+'/category/save', {
                    idCategory   : me.idCategory,
                    categoryName : me.categoryName.trim(),
                })
                .then(function (response) {
                    CargandoSweet(1);
                    if(response.data.error) {
                        Success_Error_Mostrar('Error', response.data.info, 'error');
                        return false;
                    }
                    Success_Error_Mostrar("Registro Correcto", response.data.info, "success", 1);
                    me.getCategories();
                    $("#cerrarModal").trigger( "click" );
                    me.clearInputs();
                })
                .catch(function (error) {
                    CargandoSweet(1);
                    console.log(error);
                    Success_Error_Mostrar('Error', error, 'error');
                });
            },

            validateInputs() {
                if( this.categoryName.trim() == '' ) {
                    Success_Error_Mostrar('Falta información', 'Nombre de categoría abligatorio', 'warning');
                    return false;
                }

                return true;
            },

            clearInputs() {
                this.idCategory   = 0;
                this.categoryName = '';
            },

            async getCategories() {
                CargandoSweet(0, 'Cargando...');
                let me = this;
                await axios.get(urlApi+'/categories',{
                    params: {
                        inputSearch: me.inputSearch,
                    }
                })
                .then(function (response) {
                    me.listCaterory = response.data.info.categories;
                    CargandoSweet(1);
                })
                .catch(function (error) {
                    CargandoSweet(1);
                    console.log(error);
                    Success_Error_Mostrar('Error', error, 'error');
                });
            },

            async deleteCategory(cate) {
                await Swal.fire({
                    title: "Esta Seguro?",
                    text: "Desea eliminar categoría " + cate.name + "?",
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#6c757d',
                    confirmButtonText: 'Aceptar',
                    cancelButtonText: 'Cancelar'
                })
                .then((result) => {
                    if (result.value) {
                        let me = this;
                        CargandoSweet(0, 'Eliminando...');
                        axios.post(urlApi+'/category/delete', {
                            idCategory: cate.id
                        })
                        .then(function (response) {
                            CargandoSweet(1);
                            if(response.data.error) {
                                Success_Error_Mostrar('Error', response.data.info, 'error');
                                return false;
                            }
                            Success_Error_Mostrar("", response.data.info, "success", 1);
                            me.getCategories();
                            me.clearInputs();
                        })
                        .catch(function (error) {
                            CargandoSweet(1);
                            console.log(error);
                            Success_Error_Mostrar('Error', error, 'error');
                        });
                    }
                });
            },

            editCategory(cate) {
                this.idCategory = cate.id;
                this.categoryName = cate.name;
            },

            clearSearch() {   // limpia la busqueda en la tabla segun campo
                this.inputSearch = '',
                this.getCategories();
            },
        },

        mounted() {
            this.getCategories();
        }
    }
</script>
