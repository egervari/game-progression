<template>
  <section id="edit-profile">
    <Pane>
      <SectionHeader>Edit Your Profile</SectionHeader>
      <Actions>
        <Button type="save"
                @click="saveGame()">
          Save
        </Button>
        <Button type="normal"
                @click="goToProfile()">
          Cancel
        </Button>
      </Actions>
    </Pane>

    <Pane>
      <FormGroup>
        <FormField>
          <Label>First Name</Label>
          <input v-model="profile.firstName" />
        </FormField>
        <FormField>
          <Label>Last Name</Label>
          <input v-model="profile.lastName" />
        </FormField>
        <FormField>
          <Label>Language</Label>
          <select v-model="profile.languageId">
            <option value="0" disabled>Choose a language...</option>
            <option v-for="language in languages"
                    v-bind:key="language.id"
                    v-bind:value="language.id">
              {{ language.name }}
            </option>
          </select>
        </FormField>
        <FormField>
          <Label>Average Number of Hours to Game Per Day</Label>
          <input v-model="profile.averageNumberOfHoursPerDay" />
        </FormField>
      </FormGroup>
    </Pane>
  </section>
</template>

<script>
  import Pane from "@/app/modules/ui/components/Pane";
  import SectionHeader from "@/app/modules/ui/components/SectionHeader";
  import Button from "@/app/modules/ui/components/Button";
  import Actions from "@/app/modules/ui/components/Actions";
  import FormField from "@/app/modules/ui/components/FormField";
  import Label from "@/app/modules/ui/components/Label";
  import FormGroup from "@/app/modules/ui/components/FormGroup";
  import {EditProfileStoreKeys} from "@/app/modules/profile/modules/edit-profile/edit-profile-store-keys";
  export default {
    name: 'EditProfile',
    components: {FormGroup, Label, FormField, Actions, Button, SectionHeader, Pane},
    data: function() {
      return {
        profile: {
          ...this.$store.state.profile
        }
      };
    },
    computed: {
      languages:function() {
        return this.$store.state.languages;
      }
    },
    methods: {
      saveGame: function() {
        this.$store.dispatch(EditProfileStoreKeys.Actions.SaveProfile, {
          ...this.profile,
          averageNumberOfHoursPerDay: Number(this.profile.averageNumberOfHoursPerDay),
          languageId: Number(this.profile.languageId)
        });
      },

      goToProfile: function() {
        this.$router.replace('/profile/details');
      }
    }
  }
</script>

<style lang="scss" scoped>
  #edit-profile {

  }
</style>