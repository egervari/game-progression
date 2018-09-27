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
          <Input v-bind:value="profile.firstName"
                 @change="profile.firstName = $event" />
        </FormField>
        <FormField>
          <Label>Last Name</Label>
          <Input v-bind:value="profile.lastName"
                 @change="profile.lastName = $event" />
        </FormField>
        <FormField>
          <Label>Language</Label>
          <Select v-bind:value="profile.languageId"
                  @change="profile.languageId = $event">
            <option value="0">Choose a language...</option>
            <option v-for="language in languages"
                    v-bind:key="language.id"
                    v-bind:value="language.id">
              {{ language.name }}
            </option>
          </Select>
        </FormField>
        <FormField>
          <Label>Average Number of Hours to Game Per Day</Label>
          <Input v-bind:value="profile.averageNumberOfHoursPerDay"
                 @change="profile.averageNumberOfHoursPerDay = $event" />
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
  import Input from "@/app/modules/ui/components/Input";
  import Select from "@/app/modules/ui/components/Select";
  import FormGroup from "@/app/modules/ui/components/FormGroup";
  import {EditProfileStoreKeys} from "@/app/modules/profile/modules/edit-profile/edit-profile-store-keys";
  export default {
    name: 'EditProfile',
    components: {FormGroup, Select, Input, Label, FormField, Actions, Button, SectionHeader, Pane},
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