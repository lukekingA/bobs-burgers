<template>
  <div class="row manage-creds d-flex justify-content-center">
    <div class="col-8">
        <table style="width:50%">
            <tr>
                <th>Name</th>
                <th>Surname</th> 
                <th>Wage</th>
                <th>Hours</th>
                <th>Position</th>

            </tr>
            <tr>
                <td>Jill</td>
                <td>Smith</td> 
                <td>$20.00</td>
                <td>36/40</td>
                <td>General Manager</td>
            </tr>
            <tr>
                <td>Eve</td>
                <td>Jackson</td> 
                <td>$15.00</td>
                <td>50/40</td>
                <td>Shift Manager</td>
            </tr>
        </table>
        <form></form>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'manage-creds',
    data() {
      return {}
    },
    computed: {},
    methods: {},
    components: {}
  }
</script>


<style scoped>

</style>