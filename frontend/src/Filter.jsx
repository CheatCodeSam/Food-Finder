import React from "react"
import { Box } from "@mui/material"

const Filter = () => {
  return (
    <Box
        sx={{
            position: "absolute",
            top: 60,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#f5f5f5",
            borderRadius: "10px"

        }}
    >
        <div style={{ 
            display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", margin: "10px"
        }}
        >
            <p>
                FILTERS
            </p>
            <button>filter</button>
            <button>filter</button>
            <button>filter</button>
            <button>filter</button>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum vitae eius id nesciunt molestias pariatur facilis possimus maiores illo at, soluta voluptatum delectus? Reiciendis, quia ex magnam voluptatibus eum a, deleniti assumenda alias autem porro nesciunt doloremque iusto est. Assumenda illo voluptatem a cupiditate maxime nihil laborum dolorem, maiores aut iusto soluta quos distinctio perspiciatis blanditiis similique eaque voluptatibus libero corrupti ipsa, enim provident. Sunt eligendi eum vitae tempore earum distinctio alias fuga autem et sint sapiente esse pariatur dolorem quia, animi nam deleniti illo. Officiis voluptate aliquid molestiae eius explicabo eos ab consequatur harum reiciendis repudiandae, magni ullam, deleniti officia, animi molestias voluptates distinctio adipisci quas voluptatum nemo rem numquam eum! Incidunt tempore modi veritatis officiis placeat quo neque tempora blanditiis quidem ab, ullam recusandae earum amet, numquam laudantium corrupti, autem eligendi quas beatae veniam? Sit quaerat omnis ad quo, amet, tenetur quos iste placeat molestias aut, quae eius sed magnam facilis obcaecati. Porro placeat nulla unde doloribus consequatur temporibus ab atque culpa? Dolorem animi soluta sint minus odit ipsam, est non minima voluptates eum atque explicabo quasi reiciendis nemo aspernatur! Accusantium odit saepe culpa, molestiae et excepturi natus, corporis quae quidem maiores autem quos voluptatum illum atque quod?
            </p>
        </div>
    </Box>
  )
}

export default Filter