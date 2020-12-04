<template>
    <div class="content-wrapper">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Etiquetas</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><router-link to="/">Inicio</router-link></li>
                            <li class="breadcrumb-item active">Etiquetas</li>
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
                            <button class="btn btn-primary" data-toggle="modal" data-target="#modalNuevaTag">Nueva Etiqueta</button>
                        </div>

                        <div class="col-md-2 col-sm-6 col-xs-12">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control form-control-sm" v-model="inputSearch" @keyup.enter="getTags">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fas fa-search"></i></span>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-sm-6 col-xs-6">
                            <button class="btn btn-primary btn-sm" value="filter" @click="getTags">Buscar</button>
                            <button class="btn btn-secondary btn-sm" type="button" @click="clearSearch">Limpiar</button>
                        </div>

                        <div class="col-md-12">
                            <table class="table table-bordered">
                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nombre etiqueta</th>
                                        <th scope="col">Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-if="listTags.length <= 0">
                                        <td colspan="3"> <h5>No Hay Elementos Para Mostrar</h5> </td>
                                    </tr>
                                    <tr v-for="(tag,index) in listTags" :key="tag.id" v-else>
                                        <th scope="row" v-text="index+1"></th>
                                        <td v-text="tag.name"></td>
                                        <td>
                                            <button class="btn btn-warning btn-xs" title="Editar etiqueta" data-toggle="modal" data-target="#modalNuevaTag" @click="editTag(tag)">
                                                <i class="nav-icon fas fa-pencil-alt"></i>
                                            </button>
                                            <button class="btn btn-danger btn-xs" title="Eliminar etiqueta" @click="deleteTag(tag)">
                                                <i class="nav-icon far fa-trash-alt"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="modal fade" id="modalNuevaTag" tabindex="-1" aria-hidden="true" data-backdrop="static" data-keyboard="false">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel" v-text="idTag > 0 ? 'Editar etiqueta' : 'Agregar etiqueta'"></h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" @click="clearInputs">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-md-12 form-group">
                                            <label for="tagName">Nombre etiqueta</label>
                                            <input type="text" class="form-control" id="tagName" autocomplete="off" v-model="tagName">
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary" @click="saveTag">Guardar</button>
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
                idTag: 0,
                tagName: '',
                inputSearch: '',
                listTags: [],
            }
        },

        methods: {
            async saveTag() {
                if( !this.validateInputs() ) { return false; }
                let me = this;
                CargandoSweet(0, 'Guardando...');
                await axios.post(urlApi+'/tag/save', {
                    idTag   : me.idTag,
                    tagName : me.tagName.trim(),
                })
                .then(function (response) {
                    CargandoSweet(1);
                    if(response.data.error) {
                        Success_Error_Mostrar('Error', response.data.info, 'error');
                        return false;
                    }
                    Success_Error_Mostrar("Registro Correcto", response.data.info, "success", 1);
                    me.getTags();
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
                if( this.tagName.trim() == '' ) {
                    Success_Error_Mostrar('Falta información', 'Nombre de etiqueta abligatorio', 'warning');
                    return false;
                }

                return true;
            },

            clearInputs() {
                this.idTag   = 0;
                this.tagName = '';
            },

            async getTags() {
                CargandoSweet(0, 'Cargando...');
                let me = this;
                await axios.get(urlApi+'/tags',{
                    params: {
                        inputSearch: me.inputSearch,
                    }
                })
                .then(function (response) {
                    me.listTags = response.data.info.tags;
                    CargandoSweet(1);
                })
                .catch(function (error) {
                    CargandoSweet(1);
                    console.log(error);
                    Success_Error_Mostrar('Error', error, 'error');
                });
            },

            async deleteTag(tag) {
                await Swal.fire({
                    title: "Esta Seguro?",
                    text: "Desea eliminar etiqueta " + tag.name + "?",
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
                        axios.post(urlApi+'/tag/delete', {
                            idTag: tag.id
                        })
                        .then(function (response) {
                            CargandoSweet(1);
                            if(response.data.error) {
                                Success_Error_Mostrar('Error', response.data.info, 'error');
                                return false;
                            }
                            Success_Error_Mostrar("", response.data.info, "success", 1);
                            me.getTags();
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

            editTag(tag) {
                this.idTag = tag.id;
                this.tagName = tag.name;
            },

            clearSearch() {   // limpia la busqueda en la tabla segun campo
                this.inputSearch = '',
                this.getTags();
            },
        },

        mounted() {
            this.getTags();
        }
    }
</script>
