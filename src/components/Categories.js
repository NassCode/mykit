import React from 'react'
import Typography from "@mui/material/Typography";

export default function Categories( {categories, addCategory} ) {
  console.log(categories)
  return (
    <div style={{ textAlign: 'right'}}>
      <div>
        {categories && categories.map((category, i) => (
          <div key={i}>
            <h2>
              {category.rep}
            </h2>
            <div>
              {category.items && category.items.map((item, i) => (
                <div key={i}>
                  <Typography>
                    {item}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
