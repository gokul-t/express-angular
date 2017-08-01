#export NODE_ENV=default
#export NODE_ENV=production

export NODE_ENV=${NODE_ENV:-development}

sudo pm2 startOrRestart ecosystem.config.js --watch --log

echo "starting with env:$NODE_ENV"

if [ "$NODE_ENV" = "development" ]; then
  ng serve --open
else       
  ng build
fi



