import { Button, Grid, Input, Typography} from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import SendIcon from '@mui/icons-material/Send';
import bnr from '../../assets/images/banner.png';

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data.email)
  };
  return (
    <div>
      <Grid container spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center">
        <Grid item xs={12} md={6}>
          <img src={bnr} alt="" />
        </Grid>
        <Grid item xs={12} md={6} style={{display:'flex',flexDirection:'column', justifyContent:'center'}}>
          <form onSubmit={handleSubmit(onSubmit)} >
            <Input type="text" placeholder="Write First Name" {...register("firstName", { required: true, maxLength: 20 })} />
            <br />
            <Input type="text" placeholder="Write last Name" {...register("lastName", { required: true })} />
            <br />
            <Input type="number" placeholder="phone" {...register("phone", { required: true, min: 11, max: 11 })} />
            <br />
            <Input type="email" placeholder="Write email address" {...register("email", { required: true })} />
            <br />
            <Input type="password" placeholder="Write password" {...register("password", { required: true })} />
            <br />
            <Typography variant="body" gutterBottom>
              Back
            </Typography>
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Next step
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Signup;