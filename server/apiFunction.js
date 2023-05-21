import turf from '@turf/distance';

export const getRandomCoordinate = (req, res) => {
    let x = req.body.x
    let y= req.body.y;
    const raduis = req.body.raduis;

    let a = Math.random() 
    let b = Math.random()  
    let theta = b * 2 * Math.PI
    let rr = raduis * Math.Sqrt(a)
    let d_x = rr * Math.Cos(theta)
    let d_y = rr * Math.Sin(theta)

    res.send({'x':x+d_x,'y':y+d_y})


}

export const getDistance = (req, res) =>{
    let coord_ball_x = req.body.ball.x
    let coord_ball_y = req.body.ball.y
    let coord_goal_x = req.body.goal.x
    let coord_goal_y = req.body.goal.y
    var from= turf.point([coord_ball_x, coord_ball_y]);
    var to = turf.point([coord_goal_x, coord_goal_y]);
    var options = {units: 'miles'};
    
    var distance = turf.distance(from, to, options);
    if(distance< req.body.raduis){
        res.send(true)
    }else{
        res.send(false)
    }
}