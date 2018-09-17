
<template>
  <transition name="modal">
    <div
      class="modal modal-mask"
      style="display: block">
      <div
        class="modal-dialog shadow"
        role="document">
        <div class="modal-content">
          <div class="modal-header justify-content-center">
            <slot name="header"/>
          </div>

          <div class="modal-body">
            <slot name="body"/>
          </div>

          <div class="modal-footer">
            <slot name="footer"/>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>s
<script>
export default {
  data () {
    return {
      modalShow: false
    }
  }
}
</script>
<style>
.modal-dialog {
  box-shadow: 10;
}
.modal-header {
  text-align: center;
  padding: 10px;
  background-color: #007bff;
  color: white;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
