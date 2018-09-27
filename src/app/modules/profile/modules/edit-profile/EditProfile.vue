<template>
  <section id="edit-profile">
    <Pane>
      <SectionHeader>Edit Your Profile</SectionHeader>
      <Actions>
        <Button type="save">
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
          <Input v-bind:value="profile.firstName"/>
        </FormField>
        <FormField>
          <Label>Last Name</Label>
          <Input v-bind:value="profile.lastName"/>
        </FormField>
        <FormField>
          <Label>Language</Label>
          <Select v-bind:value="profile.language">
            <option v-for="language in languages"
                    v-bind:key="language.id"
                    v-bind:value="languages.id">
              {{ language.name }}
            </option>
          </Select>
        </FormField>
        <FormField>
          <Label>Average Number of Hours to Game Per Day</Label>
          <Input v-bind:value="profile.averageNumberOfHoursPerDay" />
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
  export default {
    name: 'EditProfile',
    components: {FormGroup, Select, Input, Label, FormField, Actions, Button, SectionHeader, Pane},
    computed: {
      profile: function() {
        return this.$store.state.profile;
      },
      languages:function() {
        return this.$store.state.languages;
      }
    },
    methods: {
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