<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <router-link to="/" class="brand-link">
        <img src="img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
        <span class="brand-text font-weight-light">AdminLTE 3</span>
    </router-link>

    <div class="sidebar">
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
                <img src="img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
            </div>
            <div class="info">
                <router-link to="/" class="d-block">Alberto Álvarez</router-link>
            </div>
        </div>

        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li class="nav-item">
                    <router-link to="/categories" class="nav-link">
                        <i class="nav-icon fas fa-paw"></i>
                        <p>
                            Categorías
                        </p>
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link to="/tags" class="nav-link">
                        <i class="nav-icon fas fa-tags"></i>
                        <p>
                            Etiquetas
                        </p>
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link to="/pets" class="nav-link">
                        <i class="nav-icon fas fa-dog"></i>
                        <p>
                            Mascotas
                        </p>
                    </router-link>
                </li>
          </ul>
        </nav>
    </div>
</aside>
