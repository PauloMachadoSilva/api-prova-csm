FROM ativa/node-oracle-instant-client

WORKDIR /app

COPY . .

RUN rm -rf node_modules && npm cache clean --force
RUN sudo npm install --production --unsafe-perm=true --allow-root

RUN chmod -x /app/node_modules/oracledb/build/Release/oracledb.node && chmod 744 /app/node_modules/oracledb/build/Release/oracledb.node 

CMD \
    npm start

EXPOSE 3000
