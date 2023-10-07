$(document).ready(function(){
  // empty dictionary to store Amenity IDs and names
  var selectedAmenities = {}
  
  // Listen for changes on each input checkbox tag
  $('input[type="checkbox"]').change(function() {
    var amenityId = $(this).data('id')
    var amenityName = $(this).data('name')
  
    if ($(this).is(':checked')) {
      selectedAmenities[amenityId] = amenityName;
    } else {
        delete selectedAmenities[amenityId]
    }
    updateAmenitiesList(selectedAmenities);
  });
  
  // Function to update the h4 tag with the list of Amenities checked
  function updateAmenitiesList(amenities) {
    var amenitiesList = Object.values(amenities).join(', ')
    // Replace 'amenitiesListId' with the actual ID of the <h4> tag
    $('#amenitiesListId').text(amenitiesList);
  }

});
