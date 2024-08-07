```js
@Injectable()
export class AuthGuard implements CanActivate {
    private readonly excludedRoutes :{path:string, method:string}[] = [
        {path: '/users', method: 'POST'},
        {path:'/products', method: 'GET'},
        {path:'/products/:id', method: 'GET'},
    ];
    private isExcluded(url: string, method: string): boolean {
        return this.excludedRoutes.some(route => {
            const regex = new RegExp(^${route.path.replace(/:id/g, '[^/]+')}$);
            return regex.test(url) && route.method === method;
        });
    }
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest<Request>();

        const {url, method} = request;
        if(this.isExcluded(url, method)){
            return true
        }

        return ValidateRequest(request);
    }
}