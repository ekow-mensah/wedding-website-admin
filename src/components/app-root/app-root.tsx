import { Component, h, getAssetPath, Prop } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {

  @Prop() image = "logo.png";

  render() {
    return (
      <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12">
          <img class="logo" src={getAssetPath(`../assets/logo/${this.image}`)} alt="Yes2Mensah logo" />
           <div class="card login-card">
              <div class="card-body">
                <div class="card-title text-center">Log in to continue</div>
                <div class="login-form-container">
                  <form>
                    <div class="mb-3">
                      <input type="text" class="username" id="username" placeholder="Username"></input>
                    </div>
                    <div class="mb-3">
                      <input type="password" class="password" id="password" placeholder="Password"></input>
                    </div>
                    <button class="btn-sign-in">Log in</button>
                  </form>
                </div>
                <span><a href="#">Can't Login?</a></span>
              </div>
           </div>
        </div>
      </div>
    </div>
    );
  }
}
