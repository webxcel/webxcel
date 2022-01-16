<template>
  <div>
    <div class="flex items-center justify-start pb-3 pl-1 font-bold border-b-2">
      New web project
    </div>
    <div class="flex flex-col space-y-5 pt-6">
      <div class="form-control">
        <label class="label">
          <span class="label-text">App name</span>
        </label>
        <input
          type="text"
          placeholder="Facebook"
          class="input input-bordered"
          v-model="data.name"
        />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Description (optional)</span>
        </label>
        <textarea
          class="textarea h-24 textarea-bordered"
          placeholder="Description"
          v-model="data.description"
        ></textarea>
      </div>
      <div
        class="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0 md:items-center"
      >
        <div class="md:flex-1">Git repository</div>
        <div class="md:flex-none">
          <div class="tabs tabs-boxed">
            <div
              @click="changeT(t)"
              v-for="(t, i) in tabs"
              :key="i"
              class="tab"
              :class="{
                'tab-active': t == data.git,
              }"
            >
              {{ t }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between space-x-4 items-center mt-10 pb-2 w-full">
      <div class="flex-none">
        <button @click="closeM" class="btn">Cancel</button>
      </div>
      <div class="flex-1">
        <button
          :class="{
            'btn-disabled': isValid == false,
          }"
          :disabled="isValid == false"
          class="btn btn-primary btn-block"
          @click="emitData"
        >
          Continue
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  const emit = defineEmits(["data"]);
  const tabs = ref(["New", "Import", "None"]);
  const data = reactive({
    name: "",
    description: "",
    git: "New",
  });
  const changeT = (e: string) => {
    data.git = e;
  };
  const closeM = () => {
    window.location.hash = "";
  };
  const isValid: any = computed(() => data.name && data.git);
  const emitData = () => {
    if (!isValid.value) return;
    emit("data", { data });
  };
</script>
