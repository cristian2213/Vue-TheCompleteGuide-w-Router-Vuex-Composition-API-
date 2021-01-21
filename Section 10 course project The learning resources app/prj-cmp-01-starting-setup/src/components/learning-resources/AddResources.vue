<template>
  <base-dialog
    v-if="inputIsInvalid"
    title="Invalid Input"
    @close="confirmError"
  >
    <!-- slot default -->
    <template #default>
      <p>Unfortunately, at least one input value is invalid</p>
      <p>
        Please check all inputs and make sure you enter at least a few
        characters into each input field
      </p>
    </template>

    <!-- slot actions -->
    <template #actions>
      <base-button @click="confirmError">Okay</base-button>
    </template>
  </base-dialog>

  <base-card>
    <form @submit.prevent="submitNewResource">
      <div class="form-control">
        <label for="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          @input="addField"
          :value="newResource.title"
        />
      </div>

      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          rows="3"
          @input="addField"
          :value="newResource.description"
        ></textarea>
      </div>

      <div class="form-control">
        <label for="link">Link</label>
        <input
          type="url"
          name="link"
          id="link"
          @input="addField"
          :value="newResource.link"
        />
      </div>

      <div>
        <base-button type="submit" mode="">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ['newResourceItem'],

  data() {
    return {
      newResource: { title: '', description: '', link: '' },
      inputIsInvalid: false,
    };
  },

  methods: {
    addField(event) {
      this.newResource = {
        ...this.newResource,
        [event.target.name]: event.target.value,
      };
    },

    submitNewResource() {
      const { title, description, link } = this.newResource;

      if (
        title.trim() === '' ||
        description.trim() === '' ||
        link.trim() === ''
      ) {
        this.inputIsInvalid = true;
        return;
      }

      this.inputIsInvalid = false;

      // send data
      this.newResourceItem(this.newResource);

      // clean object
      this.newResource = { title: '', description: '', link: '' };
    },

    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
