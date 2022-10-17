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
:max_guests,
:created_at, 
:updated_at

if spot.photo.attached?
    (spot.photo.url) 
end
