<template>
  <div>
    <div class="flex overflow-y-auto max-h-72 flex-col space-y-5 w-full">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Organisation name</span>
        </label>
        <input type="text" :value="name" disabled class="input input-bordered input-disabled" />
      </div>
      <div class="form-control">
        <label class="cursor-pointer label">
          <span class="label-text">Import Members</span>
          <input
            type="checkbox"
            @change="setM"
            :checked="store.newRepo.importMembers"
            class="checkbox checkbox-primary"
          />
        </label>
      </div>
      <div class="form-control">
        <label class="cursor-pointer label">
          <span class="label-text">Import Teams</span>
          <input
            type="checkbox"
            @change="setT"
            :checked="store.newRepo.importTeams"
            class="checkbox checkbox-primary"
          />
        </label>
      </div>
      <div class="form-control">
        <label class="cursor-pointer label">
          <span class="label-text">Import Projects</span>
          <input
            type="checkbox"
            @change="setP"
            :checked="store.newRepo.importProjects"
            class="checkbox checkbox-primary"
          />
        </label>
      </div>
    </div>
    <div class="pt-5 w-full">
      <button class="btn btn-block btn-primary shadow-lg">create</button>
    </div>
  </div>
</template>
<script lang="ts">
import Loading1 from "#/components/base/loading.vue";
import { getOrg } from "#/pages/organisations/get-org.telefunc";
import { usePageContext } from "#/renderer/usePageContext";
import { useAppStore } from "#/store/app";

export default defineComponent({
  components: { Loading1 },
  props: ['name'],
  data() {
    return {
      loading: false,

    }
  },
  setup(props) {
    const pageContext: any = usePageContext();
    const store = useAppStore();
    return {
      pageContext,
      store,
    };
  },
  methods: {
    setM() {
      this.store.newRepo.importMembers = !this.store.newRepo.importMembers
    },
    setT() {
      this.store.newRepo.importTeams = !this.store.newRepo.importTeams
    },
    setP() {
      this.store.newRepo.importProjects = !this.store.newRepo.importProjects
    }
  },
  mounted() {
  },
})
</script>