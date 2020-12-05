<template>
    <div class="content-wrapper">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Mascotas</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><router-link to="/">Inicio</router-link></li>
                            <li class="breadcrumb-item active">Mascotas</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>

        <section class="content">
            <div class="card card-solid">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12 mb-3">
                            <button class="btn btn-primary" data-toggle="modal" data-target="#modalNuevaPet">Nueva mascota</button>
                        </div>

                        <div class="col-md-2 col-sm-4 col-xs-12">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control form-control-sm" v-model="inputSearch" @keyup.enter="getPets" placeholder="Id o nombre">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fas fa-search"></i></span>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-5 col-sm-4 col-xs-6">
                            <button class="btn btn-primary btn-sm" value="filter" @click="getPets">Buscar</button>
                            <button class="btn btn-secondary btn-sm" type="button" @click="clearSearch">Limpiar</button>
                        </div>

                        <div class="col-md-5 col-sm-4 col-xs-6 text-right">
                            <label>Filtro status&nbsp;&nbsp;</label>
                            <select v-model="searchStatus" @change="getPets">
                                <option value=''>Tod@s</option>
                                <option v-for="(statu,index) in listStatus" :key="index" :value="statu.id" v-text="statu.name"></option>
                            </select>
                        </div>

                        <div class="col-md-12">
                            <table class="table table-bordered">
                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Nombre mascota</th>
                                        <th scope="col">Categoría</th>
                                        <th scope="col">Etiquetas</th>
                                        <th scope="col">Estatus</th>
                                        <th scope="col">Foto</th>
                                        <th scope="col">Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-if="listPets.length <= 0">
                                        <td colspan="7"> <h5>No Hay Elementos Para Mostrar</h5> </td>
                                    </tr>
                                    <tr v-for="pet in listPets" :key="pet.id" v-else>
                                        <th scope="row" v-text="pet.id"></th>
                                        <td v-text="pet.name"></td>
                                        <td v-text="pet.categoryName"></td>
                                        <td v-text="( labelTags(pet.tags) )"></td>
                                        <td v-text="pet.statusName"></td>
                                        <!-- <td v-text="pet.photourls"></td> -->
                                        <td>
                                            <a class="btn btn-success btn-xs" :href="url+pet.photourls" target="_blank" title="Ver imagen">
                                                <i class="far fa-image"></i>
                                            </a>
                                        </td>
                                        <td>
                                            <button class="btn btn-warning btn-xs" title="Editar etiqueta" data-toggle="modal" data-target="#modalNuevaPet" @click="editPet(pet)">
                                                <i class="nav-icon fas fa-pencil-alt"></i>
                                            </button>
                                            <button class="btn btn-danger btn-xs" title="Eliminar etiqueta" @click="deletePet(pet)">
                                                <i class="nav-icon far fa-trash-alt"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="modal fade" id="modalNuevaPet" tabindex="-1" aria-hidden="true" data-backdrop="static" data-keyboard="false">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Nueva mascota</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="clearInputs">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-md-12 form-group">
                                            <label for="tagName">Nombre mascota</label>
                                            <input type="text" class="form-control" id="tagName" autocomplete="off" v-model="petName">
                                        </div>
                                        <div class="col-md-12 form-group">
                                            <label for="categories">Categoría</label>
                                            <multiselect
                                                v-model="category"
                                                label="name"
                                                track-by="id"
                                                :options="listCategories"
                                                selectLabel="Presione para seleccionar"
                                                deselectLabel="Presione para eliminar"
                                                selectedLabel="Seleccionado"
                                                placeholder=""
                                            />
                                        </div>
                                        <div class="col-md-12 form-group">
                                            <label for="tags">Etiquetas</label>
                                            <multiselect
                                                v-model="tags"
                                                label="name"
                                                track-by="id"
                                                :options="listTags"
                                                selectLabel="Presione para Agregar"
                                                deselectLabel="Presione para eliminar"
                                                selectedLabel="Seleccionado"
                                                placeholder=""
                                                :multiple="true"
                                                :taggable="true"
                                            />
                                        </div>
                                        <div class="col-md-12 form-group">
                                            <label for="status">Estatus</label>
                                            <multiselect
                                                v-model="status"
                                                label="name"
                                                track-by="id"
                                                :options="listStatus"
                                                selectLabel="Presione para seleccionar"
                                                deselectLabel="Presione para eliminar"
                                                selectedLabel="Seleccionado"
                                                placeholder=""
                                            />
                                        </div>
                                        <div class="col-md-12 form-group">
                                            <label for="file" class="marginBotto_0">Imagen</label>
                                            <div class="custom-file">
                                                <input id="file" type="file" accept=".jpg, .jpeg, .png, .gif, .bmp" @change="obtenerImagen">
                                            </div>
                                        </div>
                                        <div class="col-md-6 text-center" v-if="petPhoto">
                                            <label class="marginBotto_0">Imagen guardada</label><br>
                                            <img :src="url+petPhoto" width="120px">
                                        </div>
                                        <div class="col-md-6 text-center" v-if="miniatura">
                                            <label class="marginBotto_0">Imagen seleccionada</label><br>
                                            <img :src="imagen" width="120px">
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary" @click="savePet">Guardar</button>
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
    import Multiselect from 'vue-multiselect';

    export default {
        components: { Multiselect },

        data() {
            return {
                idPet: 0,
                petName: '',
                category: [],
                tags: [],
                status: '',
                photo: '',
                petPhoto: '',
                inputSearch: '',

                listPets: [],
                listCategories: [],
                listTags: [],
                listStatus: [],
                miniatura: '',
                url: '',
                searchStatus: '',
            }
        },

        computed: {
            imagen() {
                return this.miniatura;
            }
        },

        methods: {
            obtenerImagen(e) {
                let file = e.target.files[0];
                if( !file || file == '' ) {
                    this.miniatura = '';
                    return false;
                }
                this.photo = file;
                this.cargarImagen(file);
            },
            cargarImagen(file) {
                let reader = new FileReader();
                reader.onload = (e) => {
                    this.miniatura = e.target.result;
                }
                reader.readAsDataURL(file);
            },

            async paramsPets() {
                let me = this;
                CargandoSweet(0, 'Cargando...');
                await axios.get(urlApi+'/pet/params')
                .then(function (response) {
                    CargandoSweet(1);
                    if(response.data.info.error) {
                        Success_Error_Mostrar('', response.data.info.msj, 'warning');
                        return false;
                    }

                    let data = response.data;
                    me.listCategories = data.info.categories;
                    me.listTags       = data.info.tags;
                    me.listStatus     = data.info.status;
                })
                .catch(function (error) {
                    CargandoSweet(1);
                    console.log(error);
                    Success_Error_Mostrar('Error', error, 'error');
                });
            },

            async savePet() {
                if( !this.validateInputs() ) { return false; }
                let me = this;
                CargandoSweet(0, 'Guardando...');

                let formData = new FormData();
                formData.append('idPet', this.idPet);
                formData.append('petName', this.petName.trim());
                formData.append('category', JSON.stringify(this.category));
                formData.append('tags', JSON.stringify(this.tags));
                formData.append('status', JSON.stringify(this.status));
                formData.append('photo', this.photo);

                await axios.post(urlApi+'/pet',formData)
                .then(function (response) {
                    CargandoSweet(1);
                    if(response.data.error) {
                        Success_Error_Mostrar('Error', response.data.info, 'error');
                        return false;
                    }
                    Success_Error_Mostrar("Registro Correcto", response.data.info, "success", 1);
                    me.getPets();
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
                if( this.petName.trim() == '' ) {
                    Success_Error_Mostrar('Falta información', 'Nombre de mascota abligatorio', 'warning');
                    return false;
                }

                if( this.category.length == 0  ) {
                    Success_Error_Mostrar('Falta información', 'Debe seleccionar una categoría', 'warning');
                    return false;
                }

                if( this.photo == '' && this.idPet == 0 ) {
                        Success_Error_Mostrar('Falta información', 'Foto es abligatorio', 'warning');
                        return false;
                    }

                return true;
            },

            clearInputs() {
                this.idPet = 0;
                this.petName = '';
                this.category = [];
                this.tags = [];
                this.status = '';
                this.petPhoto = '';
                this.photo = '';
                this.miniatura = '';
                $("#file").val('');
            },

            async getPets() {
                CargandoSweet(0, 'Cargando...');
                let me = this;
                await axios.get(urlApi+'/pet',{
                    params: {
                        inputSearch:  me.inputSearch,
                        searchStatus: me.searchStatus,
                    }
                })
                .then(function (response) {
                    me.listPets = response.data.info.pets;
                    CargandoSweet(1);
                })
                .catch(function (error) {
                    CargandoSweet(1);
                    console.log(error);
                    Success_Error_Mostrar('Error', error, 'error');
                });
            },

            labelTags(tags) {
                let label = '';
                tags.forEach( (info,index) => {
                    if( index == 0 ) {
                        label += info['name'];
                    } else {
                        label += ', ' + info['name'];
                    }
                });
                return label;
            },

            editPet(pet) {
                this.idPet    = pet.id;
                this.petName  = pet.name;
                this.category = { 'id': pet.category, 'name': pet.categoryName };
                this.status   = { 'id': pet.status, 'name': pet.statusName };
                this.petPhoto = pet.photourls;

                let data = [];
                pet['tags'].forEach( info => {
                    data.push( { 'id': info.tag, 'name': info.name } );
                });
                this.tags = data;
            },

            async deletePet(pet) {
                await Swal.fire({
                    title: "Esta Seguro?",
                    text: "Desea eliminar mascota " + pet.name + "?",
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
                        axios.post(urlApi+'/pet/delete', {
                            idPet: pet.id
                        })
                        .then(function (response) {
                            CargandoSweet(1);
                            if(response.data.error) {
                                Success_Error_Mostrar('Error', response.data.info, 'error');
                                return false;
                            }
                            Success_Error_Mostrar("", response.data.info, "success", 1);
                            me.getPets();
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

            clearSearch() {   // limpia la busqueda en la tabla segun campo
                this.inputSearch = '',
                this.getPets();
            },
        },

        async mounted() {
            await this.getPets();
            await this.paramsPets();
            this.url = urlApi;
        }
    }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"> </style>
