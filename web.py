#! /usr/bin/env python2
import SimpleHTTPServer
import SocketServer

PORT = 8091

Handler = SimpleHTTPServer.SimpleHTTPRequestHandler

httpd = SocketServer.TCPServer(("", PORT), Handler)

print "serving at port" + str(PORT)
httpd.serve_forever()
