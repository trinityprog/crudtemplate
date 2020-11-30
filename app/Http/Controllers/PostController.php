<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{

    public function index(Request $request)
    {
        $query = Post::query();

        $search = $request->input('search');

        if(!empty($search)) {
            $query->where('title', 'LIKE', "%$search%");
            $query->orWhere('body', 'LIKE', "%$search%");
        }

        $data= $query->latest()->get();

        return Inertia::render('Post/index', ['data' => $data]);
    }


    public function create()
    {
        return Inertia::render('Post/create');
    }

    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'title' => ['required'],
            'body' => ['required'],
        ])->validate();

        Post::create($request->all());

        return redirect('/posts')
            ->with('message', 'Post Created Successfully.');
    }


    public function edit($id)
    {
        $data = Post::find($id);
        return Inertia::render('Post/edit', ['data' => $data]);
    }

    public function update(Request $request)
    {
        Validator::make($request->all(), [
            'title' => ['required'],
            'body' => ['required'],
        ])->validate();

        if ($request->has('id')) {
            $post = Post::find($request->input('id'))->update($request->all());
            return redirect('/posts')->with('message', 'Запись успешно изменена.');
        }
    }


    public function destroy($id)
    {
        Post::find($id)->delete();
        return redirect()->back()->with('message', 'Запись успешно удалена.');
    }
}
