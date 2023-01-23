const updateCourses = async (Request) => {
  let data;
  const body = await Request.json();

  const reqBody = {
    records: [
      {
        id: body.id,
        fields: {
          Name: body.fields.Name,
          Link: body.fields.Link,
          Tags: body.fields.Tags,
          Purchased: body.purchased,
        },
      },
    ],
    typecast: true,
  };
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS,PATCH",
    "Access-Control-Max-Age": "86400",
  };
  let respHeaders = {
    ...corsHeaders,
    // "Access-Control-Allow-Headers": Request.headers.get(
    //   "Access-Control-Request-Headers"
    // ),
  };
  await fetch(
    `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(
      AIRTABLE_TABLE_NAME
    )}`,
    {
      method: "PATCH",
      body: JSON.stringify(reqBody),
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        "Content-type": `application/json`,
      },
    }
  )
    .then((res) => res.json())
    .then((result) => (data = result));

  return new Response(JSON.stringify({ msg: data }), { headers: respHeaders });
};

export default updateCourses;
