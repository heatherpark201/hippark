json.extract! spot, 
:id, 
:title, 
:description, 
:host_id, 
:street_address, 
:city, 
:state,
:region,
:zip_code,
:country,
:listing_type,
:price,
:lat,
:lng,
:is_live,
:acres,
:sites,
:max_guests,
:created_at, 
:updated_at,
:photo_urls


# if spot.photo.attached?
#     json.photo (spot.photo.url) 
# end
